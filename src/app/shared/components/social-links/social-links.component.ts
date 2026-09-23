import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, signal } from '@angular/core';

import { PROFILE } from '@core/profile/profile';

const COPY_FEEDBACK_MS = 2000;

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-wrap items-center gap-3',
    '[class.justify-center]': "align() === 'center'",
    '[class.justify-start]': "align() === 'start'",
  },
})
export class SocialLinksComponent {
  /** Alineación horizontal del grupo: centrado (footer) o al inicio (hero). */
  readonly align = input<'center' | 'start'>('center');

  protected readonly email = PROFILE.email;
  protected readonly resume = PROFILE.resume.es;
  protected readonly socials = PROFILE.socials;
  protected readonly copied = signal(false);

  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
    } catch {
      return; // Portapapeles no disponible (contexto no seguro o permiso denegado).
    }
    this.copied.set(true);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copied.set(false), COPY_FEEDBACK_MS);
  }
}
