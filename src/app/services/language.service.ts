import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
<<<<<<< HEAD
  // used languages
=======

  private readonly defaultLang = navigator.language.split('-')[0];
>>>>>>> feature-language-button
  private readonly supportedLangs = ['es', 'en'];
  private router = inject(Router);

  getBrowserLang(): string | null {
    const browserLang = navigator.language.split('-')[0];
    return this.supportedLangs.includes(browserLang) ? browserLang : null;
  }

<<<<<<< HEAD
  initializeLanguage(): void {
    const storedLang = localStorage.getItem('lang');
    const browserLang = this.getBrowserLang();
    const defaultLang = storedLang || browserLang || 'en';

    // if the language is not in the URL, redirect
    const currentPath = window.location.pathname;
    if (currentPath.startsWith(`/${defaultLang}/`)) return;

    // Navigate to the default language
    this.router.navigate([`/${defaultLang}${currentPath}`]);
=======
  currentLang(): string {
    const lang = localStorage.getItem('lang') || this.defaultLang;
    return this.supportedLangs.includes(lang) ? lang : this.defaultLang;
>>>>>>> feature-language-button
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
<<<<<<< HEAD
    const currentPath = this.router.url.replace(/^\/(es|en)/, '');
    this.router.navigate([`/${lang}${currentPath}`]);
=======
    this.redirectToLang(lang);
  }

  redirectToLang(lang: string): void {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    const newUrl = `/${lang}/${cleanPath}`;
    window.location.href = newUrl;
>>>>>>> feature-language-button
  }
}
