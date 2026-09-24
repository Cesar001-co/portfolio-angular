import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Skeleton } from 'primeng/skeleton';

import { SECTION_IDS } from '@core/navigation/sections';
import { PROFILE } from '@core/profile/profile';
import { SocialLinksComponent } from '@shared/components/social-links/social-links.component';
import { CountUpDirective } from '@shared/directives/count-up.directive';
import { HERO_CONTENT } from './hero.config';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe, Skeleton, SocialLinksComponent, CountUpDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo a ancho completo en el host: primary translúcido que tiñe el fondo de ambos temas
  // y se funde (transparent) con el fondo de la página.
  // -mt/pt: se extiende por debajo del header fijo (transparente arriba) para que el fondo se vea tras él.
  host: {
    id: SECTION_IDS.home,
    class: 'block -mt-(--app-header-height) pt-(--app-header-height) bg-linear-to-b from-primary/25 via-primary/10 to-transparent',
  }
})
export class HeroComponent {
  protected readonly content = HERO_CONTENT;
  protected readonly profile = PROFILE;
  /** false mientras la foto carga: se muestra el skeleton. */
  protected readonly avatarLoaded = signal(false);
}
