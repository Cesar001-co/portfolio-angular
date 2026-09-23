import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SECTION_IDS } from '@core/navigation/sections';
import { ThemeService } from '@core/theme/theme.service';
import { NAV_ITEMS } from './header.config';

/** Desplazamiento (px) a partir del cual el header deja de ser transparente. */
const SCROLL_THRESHOLD = 8;

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fixed inset-x-0 top-0 z-50 block',
    '(window:scroll)': 'updateScrolled()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly navItems = NAV_ITEMS;
  protected readonly homeSection = SECTION_IDS.home;
  protected readonly menuOpen = signal(false);

  private readonly scrolled = signal(false);
  /** Transparente sobre el hero; con fondo al hacer scroll o con el menú móvil abierto. */
  protected readonly solid = computed(() => this.scrolled() || this.menuOpen());

  constructor() {
    // El scroll a secciones descuenta la altura real del header fijo.
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    inject(ViewportScroller).setOffset(() => [0, host.offsetHeight]);

    // Estado inicial correcto si la página carga ya desplazada (p. ej. /#about).
    afterNextRender(() => this.updateScrolled());
  }

  protected updateScrolled(): void {
    this.scrolled.set(window.scrollY > SCROLL_THRESHOLD);
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
