import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly defaultLang = 'es';
  private readonly supportedLangs = ['es', 'en'];

  constructor() { }

  get currentLang(): string {
    const lang = localStorage.getItem('lang') || this.defaultLang;
    return this.supportedLangs.includes(lang) ? lang : this.defaultLang;
  }

  setLanguage(lang: string): void {
    if (!this.supportedLangs.includes(lang)) return;

    localStorage.setItem('lang', lang);
    this.redirectToLang(lang);
  }

  public redirectToLang(lang: string): void {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    const newUrl = `/${lang}/${cleanPath}`;
    window.location.href = newUrl;
  }
}
