import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { SettingsButtonComponent } from '../../design/settings-button/settings-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SettingsButtonComponent],
  template: '<router-outlet></router-outlet><settings-button></settings-button>',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  ngOnInit(): void {
    const currentLang = this.languageService.getCurrentNavigationLang();
    const currentPath = window.location.pathname;
    const preferredLang = this.languageService.getPreferredLanguage();
    
    // check if the current path starts with the current language example: /es/ or /en/
    if (currentPath.startsWith(`/${currentLang}/`)) {
      if (this.languageService.isValidLanguage(currentLang))  {

        if (currentLang !== preferredLang) {
          this.languageService.setLanguage(currentLang);
        }
        // this.redirectToCorrectLanguage(preferredLang, currentPath);
        
      }
    }
  }

  private redirectToCorrectLanguage(targetLang: string, currentPath: string): void {
    // Limpiar ruta y mantener parámetros de query
    const cleanPath = currentPath.replace(/^\/(es|en)\//, '');
    const newPath = `/${targetLang}/${cleanPath}`.replace(/\/+/g, '/');
    
    // Redirección con Router de Angular (sin recargar la página)
    this.router.navigateByUrl(newPath, { replaceUrl: true });
  }
}
