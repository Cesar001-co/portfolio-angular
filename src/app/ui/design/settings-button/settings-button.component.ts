import { Component, inject } from '@angular/core';
import { ThemesService } from '../../../services/themes.service';
import { LanguageService } from '../../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'settings-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
export class SettingsButtonComponent {
  userTheme: string | null = '';
  language: string | null ='';

  private languageService = inject(LanguageService);
  private themesService = inject(ThemesService);

  constructor( ) {
    this.language = this.languageService.getLanguage();
    this.userTheme = this.themesService.getLightMode();
    if (this.themesService.getLightMode() === 'active') {
      this.themesService.ativeLightMode();
    }
  }

  changeTheme() {
    this.themesService.getLightMode() !== "active" ? this.themesService.ativeLightMode() : this.themesService.disableLightMode();
    this.userTheme = this.themesService.getLightMode();
  }

  switchLanguage(lang: string): void {
    if (this.languageService.languageSignal() !== lang) {
      this.languageService.updateLanguage(lang);
      this.language = lang;
      console.log('Language change to', lang);
    }
  }
}
