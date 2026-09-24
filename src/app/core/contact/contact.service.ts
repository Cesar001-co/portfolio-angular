import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { environment } from '@environments/environment';

export interface ContactMessage {
  email: string;
  message: string;
}

/**
 * Error normalizado. `field` presente cuando el error es de un campo concreto.
 * `messageKey` (clave i18n) para errores propios; `message` para el texto que devuelve Formspree.
 */
export interface ContactError {
  message?: string;
  messageKey?: string;
  field?: keyof ContactMessage;
}

interface FormspreeErrorResponse {
  errors?: { field?: string; message: string }[];
}

/**
 * Envío del formulario de contacto vía la API AJAX de Formspree
 * (POST JSON + Accept: application/json, sin redirección).
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly headers = new HttpHeaders({ Accept: 'application/json' });

  send(payload: ContactMessage): Observable<void> {
    const body = { ...payload, _subject: 'Nuevo mensaje desde el portfolio' };

    return this.http.post(environment.formspreeEndpoint, body, { headers: this.headers }).pipe(
      map(() => undefined),
      catchError((error: HttpErrorResponse) => throwError(() => this.toContactErrors(error))),
    );
  }

  private toContactErrors(error: HttpErrorResponse): ContactError[] {
    const errors = (error.error as FormspreeErrorResponse | null)?.errors;
    if (!errors?.length) {
      return [{ messageKey: 'contact.errors.network' }];
    }
    return errors.map(({ field, message }) => ({
      message,
      field: field === 'email' || field === 'message' ? field : undefined,
    }));
  }
}
