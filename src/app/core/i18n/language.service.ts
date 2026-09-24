import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';

import { AppLanguage, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, isAppLanguage } from './language.constants';

/**
 * Idioma activo de la app. Envuelve ngx-translate para exponer el idioma como signal,
 * persistir la elección y mantener sincronizado <html lang>.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  private readonly _current = signal<AppLanguage>(this.resolveInitialLanguage());
  readonly current = this._current.asReadonly();

  /** Carga el idioma inicial (se ejecuta en el arranque, antes de pintar la app). */
  init(): Observable<void> {
    return this.apply(this._current());
  }

  toggle(): void {
    this.use(this._current() === 'es' ? 'en' : 'es');
  }

  use(lang: AppLanguage): void {
    this._current.set(lang);
    this.apply(lang).subscribe();
    this.persist(lang);
  }

  private apply(lang: AppLanguage): Observable<void> {
    this.document.documentElement.lang = lang;
    return this.translate.use(lang).pipe(map(() => undefined));
  }

  /** Preferencia guardada → idioma del navegador → idioma por defecto. */
  private resolveInitialLanguage(): AppLanguage {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (isAppLanguage(stored)) return stored;
    } catch {
      // Almacenamiento no disponible: se sigue con el idioma del navegador.
    }
    const browser = this.document.defaultView?.navigator.language?.slice(0, 2);
    return isAppLanguage(browser) ? browser : DEFAULT_LANGUAGE;
  }

  private persist(lang: AppLanguage): void {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Almacenamiento no disponible (modo privado): el idioma solo dura la sesión.
    }
  }
}
