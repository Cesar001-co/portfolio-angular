import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SECTION_IDS } from '@core/navigation/sections';
import { ThemeService } from '@core/theme/theme.service';
import { NAV_ITEMS } from './header.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-50 block',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly navItems = NAV_ITEMS;
  protected readonly homeSection = SECTION_IDS.home;
  protected readonly menuOpen = signal(false);

  constructor() {
    // El scroll a secciones descuenta la altura real del header fijo.
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    inject(ViewportScroller).setOffset(() => [0, host.offsetHeight]);
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
