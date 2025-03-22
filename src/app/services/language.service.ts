import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly defaultLang = navigator.language.split('-')[0];
  private readonly supportedLangs = ['es', 'en'];
  private router = inject(Router);

  getBrowserLang(): string | null {
    const browserLang = navigator.language.split('-')[0];
    return this.supportedLangs.includes(browserLang) ? browserLang : null;
  }

  currentLang(): string {
    const lang = localStorage.getItem('lang') || this.defaultLang;
    return this.supportedLangs.includes(lang) ? lang : this.defaultLang;
  }

  getCurrentNavigationLang(): string {
    const langFromUrl = window.location.pathname.split('/')[1];

    // If the language is supported, return it
    if (this.supportedLangs.includes(langFromUrl)) {
      return langFromUrl;
    }else {
      // If the language is not supported, return the default language
      return this.defaultLang;
    }
  }

  setLanguage(lang: string): void {
    if (!this.supportedLangs.includes(lang)) return;
    
    localStorage.setItem('lang', lang);
    this.redirectToLang(lang);
  }

  redirectToLang(lang: string): void {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    const newUrl = `/${lang}/${cleanPath}`;
    window.location.href = newUrl;
  }
}
