import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // used languages
  private readonly supportedLangs = ['es', 'en'];
  private router = inject(Router);

  getBrowserLang(): string | null {
    const browserLang = navigator.language.split('-')[0];
    return this.supportedLangs.includes(browserLang) ? browserLang : null;
  }

  initializeLanguage(): void {
    const storedLang = localStorage.getItem('lang');
    const browserLang = this.getBrowserLang();
    const defaultLang = storedLang || browserLang || 'en';

    // if the language is not in the URL, redirect
    const currentPath = window.location.pathname;
    if (currentPath.startsWith(`/${defaultLang}/`)) return;

    // Navigate to the default language
    this.router.navigate([`/${defaultLang}${currentPath}`]);
  }

  setLanguage(lang: string): void {
    if (!this.supportedLangs.includes(lang)) return;
    
    localStorage.setItem('lang', lang);
    const currentPath = this.router.url.replace(/^\/(es|en)/, '');
    this.router.navigate([`/${lang}${currentPath}`]);
  }
}
