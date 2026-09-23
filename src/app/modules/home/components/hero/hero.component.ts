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
  host: { id: SECTION_IDS.home, class: 'block' }
})
export class HeroComponent {
  protected readonly content = HERO_CONTENT;
  protected readonly profile = PROFILE;
}
