import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly supportedLangs = ['es', 'en'];
  private readonly defaultNavigatiorLang = this.getBrowserLang();

  private router = inject(Router);
  
  getBrowserLang(): string {
    // Get the browser language
    const browserLang = navigator.language.split('-')[0];
    // Check if the browser language is supported if not return the default language
    return this.supportedLangs.includes(browserLang) ? browserLang : 'en';
  }

  // Get the current language from local storage or return the default language
  getCurrentLang(): string {
    const lang = localStorage.getItem('lang') || this.defaultNavigatiorLang;
    return this.supportedLangs.includes(lang) ? lang : this.defaultNavigatiorLang;
  }

  getCurrentNavigationLang(): string {
    const langFromUrl = window.location.pathname.split('/')[1];
    return this.supportedLangs.includes(langFromUrl) ? langFromUrl : this.defaultNavigatiorLang;
  }

  setLanguage(lang: string): void {
    if (!this.supportedLangs.includes(lang)) return;
    
    localStorage.setItem('lang', lang);
    this.redirectToLang(lang);
  }

  redirectToLang(lang: string): void {
    // const currentPath = window.location.pathname;
    // const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    // const newUrl = `/${lang}/${cleanPath}`;
    // window.location.href = newUrl;

    const currentPath = this.router.url.split('/').slice(2).join('/') || 'home';
    window.location.href = `/${lang}/${currentPath}`;
    // this.router.navigate([`/${lang}`, currentPath]);
  }
}
