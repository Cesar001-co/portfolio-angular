import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SECTION_IDS } from '@core/navigation/sections';
import { PROFILE } from '@core/profile/profile';
import { HERO_CONTENT } from './hero.config';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo a ancho completo en el host: primary translúcido que tiñe el fondo de ambos temas
  // y se funde (transparent) con el fondo de la página.
  host: { id: SECTION_IDS.home, class: 'block bg-linear-to-b from-primary/25 via-primary/10 to-transparent' }
})
export class HeroComponent {
  protected readonly content = HERO_CONTENT;
  protected readonly profile = PROFILE;
}
