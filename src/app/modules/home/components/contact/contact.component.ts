import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Textarea } from 'primeng/textarea';

import { ContactError, ContactService } from '@core/contact/contact.service';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { SocialLinksComponent } from '@shared/components/social-links/social-links.component';
import { CONTACT_CONTENT } from './contact.config';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslatePipe, InputText, Textarea, Message, SectionHeadingComponent, SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo principal: alterna con el verde de Experiencia.
  // El id de ancla (#contact) lo pone el home: esta sección se carga con @defer.
  host: { class: 'block bg-app-background' }
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly content = CONTACT_CONTENT;
  protected readonly status = signal<SubmitStatus>('idle');
  /** Errores devueltos por Formspree que no pertenecen a un campo concreto. */
  protected readonly formErrors = signal<ContactError[]>([]);

  protected readonly form = inject(NonNullableFormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(CONTACT_CONTENT.messageMaxLength)]],
    // Honeypot anti-spam: invisible para personas; si llega con valor, es un bot.
    _gotcha: [''],
  });

  constructor() {
    // Al volver a escribir tras un envío, se oculta el mensaje de éxito/error anterior.
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.status() === 'success' || this.status() === 'error') {
        this.status.set('idle');
        this.formErrors.set([]);
      }
    });
  }

  protected showError(control: 'email' | 'message'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  protected submit(): void {
    if (this.status() === 'sending') return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, message, _gotcha } = this.form.getRawValue();
    if (_gotcha) {
      this.status.set('success'); // Se simula éxito para no dar pistas al bot.
      return;
    }

    this.status.set('sending');
    this.formErrors.set([]);

    this.contactService
      .send({ email, message })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          // reset() antes que 'success': reset emite valueChanges y ocultaría el mensaje.
          this.form.reset();
          this.status.set('success');
        },
        error: (errors: ContactError[]) => this.handleErrors(errors),
      });
  }

  private handleErrors(errors: ContactError[]): void {
    this.status.set('error');
    const general: ContactError[] = [];
    for (const error of errors) {
      if (error.field) {
        const control = this.form.controls[error.field];
        control.setErrors({ server: error.message ?? error.messageKey });
        control.markAsTouched();
      } else {
        general.push(error);
      }
    }
    this.formErrors.set(general);
  }
}
