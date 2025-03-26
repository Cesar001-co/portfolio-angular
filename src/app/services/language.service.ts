import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly supportedLangs = ['es', 'en'];
  private readonly defaultNavigatiorLang = this.getBrowserLang();

  private router = inject(Router);

  isValidLanguage(lang: string): boolean {
    return this.supportedLangs.includes(lang);
  }

  // Get the browser language
  getBrowserLang(): string {
    const browserLang = navigator.language.split('-')[0];
    // Check if the browser language is supported if not return the default language
    return this.supportedLangs.includes(browserLang) ? browserLang : 'en';
  }

  // Get the current language from local storage
  getPreferredLanguage(): string {
    // priority: local storage > browser language > default language
    return localStorage.getItem('lang') || this.getBrowserLang() || 'en';
  }

  // Get the current language from the url or return the default
  getCurrentNavigationLang(): string {
    const langFromUrl = window.location.pathname.split('/')[1];
    return this.supportedLangs.includes(langFromUrl) ? langFromUrl : this.defaultNavigatiorLang;
  }

  setLanguage(lang: string) {
    if (this.supportedLangs.includes(lang)) {
      localStorage.setItem('lang', lang);
      this.redirectToLang(lang);
    };
  }

  redirectToLang(lang: string) {
    if (lang != this.getCurrentNavigationLang()) {
      const currentPath = window.location.pathname;
      const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
      const newUrl = `/${lang}/${cleanPath}`;
      window.location.href = newUrl;

      // const currentPath = this.router.url.split('/').slice(2).join('/');
      // // window.location.href = `/${lang}/${currentPath}`;
      // this.router.navigate([`/${lang}`, currentPath]);
    }

    // this.router.navigate([`/${lang}`, currentPath]);
  }
}
