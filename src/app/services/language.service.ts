import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly supportedLangs = ['es', 'en']; // used languages

  private router = inject(Router);

  get currentLang(): any {
     // get the language from the URL
     const langFromUrl = window.location.pathname.split('/')[1];
    
     // if the language is supported, return it
     if (this.supportedLangs.includes(langFromUrl)) {
       return langFromUrl;
     }
 
     // if the language is not supported, check if it is stored in the local storage
     const langFromStorage = localStorage.getItem('lang')?? 'en';
     return this.supportedLangs.includes(langFromStorage) ? langFromStorage : null;
  }

  setLanguage(lang: string): void {
    if (!this.supportedLangs.includes(lang)) return;

    localStorage.setItem('lang', lang);
    this.redirectToLang(lang);
  }

  public redirectToLang(lang: string): void {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(es|en)\//, ''); // Limpiar ruta actual
    const newUrl = `/${lang}/${cleanPath}`;
    window.location.href = newUrl;
  }
}
