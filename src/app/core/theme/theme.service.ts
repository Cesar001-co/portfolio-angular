import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

import { DARK_MODE_CLASS, DEFAULT_THEME, THEME_STORAGE_KEY, ThemeMode } from './theme.constants';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly mode = signal<ThemeMode>(this.readStoredMode());
  readonly isDark = computed(() => this.mode() === 'dark');

  constructor() {
    effect(() => {
      const mode = this.mode();
      this.document.documentElement.classList.toggle(DARK_MODE_CLASS, mode === 'dark');
      this.persist(mode);
    });
  }

  toggle(): void {
    this.mode.update(mode => (mode === 'dark' ? 'light' : 'dark'));
  }

  private readStoredMode(): ThemeMode {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      return stored === 'dark' || stored === 'light' ? stored : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  }

  private persist(mode: ThemeMode): void {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Almacenamiento no disponible (modo privado): el tema solo dura la sesión.
    }
  }
}
