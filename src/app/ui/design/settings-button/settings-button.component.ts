import { Component, inject } from '@angular/core';
import { ThemesService } from '../../../services/themes.service';

@Component({
  selector: 'settings-button',
  standalone: true,
  imports: [],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
export class SettingsButtonComponent {
  userTheme: string | null = '';
  language: string | null ='';

  constructor( ) {
    this.userTheme = this._themesService.getLightMode();
    if (this._themesService.getLightMode() === 'active') {
      this._themesService.ativeLightMode();
    }
  }

  // private languageService = inject(LanguageService);
  private _themesService = inject(ThemesService);

  changeTheme() {
    this._themesService.getLightMode() !== "active" ? this._themesService.ativeLightMode() : this._themesService.disableLightMode();
    this.userTheme = this._themesService.getLightMode();
  }

  switchLanguage(lang: string): void {
    // this.languageService.changeLanguage(lang);
  }
}
