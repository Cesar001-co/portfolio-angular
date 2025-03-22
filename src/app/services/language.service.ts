import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly supportedLangs = ['es', 'en'];
  private readonly defaultNavigatiorLang = this.getBrowserLang();
  
  getBrowserLang(): string {
    const browserLang = navigator.language.split('-')[0];
    return this.supportedLangs.includes(browserLang) ? browserLang : 'en';
  }

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
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    const newUrl = `/${lang}/${cleanPath}`;
    window.location.href = newUrl;
  }
}
