import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Pantalla "Próximamente" para páginas aún no construidas.
 * `message` es una clave i18n con el texto específico de cada página.
 */
@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="mx-auto flex min-h-[calc(100svh-var(--app-header-height))] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <span class="flex size-16 items-center justify-center rounded-2xl bg-accent-muted text-on-accent-muted" aria-hidden="true">
        <!-- Reloj de arena -->
        <svg viewBox="0 0 24 24" class="size-8" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2" />
        </svg>
      </span>

      <h1 class="text-4xl font-bold tracking-tight text-color sm:text-5xl">
        <span class="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">{{ 'comingSoon.title' | translate }}</span>
      </h1>
      <p class="max-w-md leading-relaxed text-muted-color">{{ message() | translate }}</p>

      <a routerLink="/" class="btn btn-primary btn-lg rounded-lg">
        <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        {{ 'comingSoon.backHome' | translate }}
      </a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Mismo recurso que el hero: se extiende bajo el header fijo para que el degradado se vea tras él.
  host: { class: 'block -mt-(--app-header-height) pt-(--app-header-height) bg-linear-to-b from-primary/25 via-primary/10 to-transparent' },
})
export class ComingSoonComponent {
  readonly message = input.required<string>();
}
