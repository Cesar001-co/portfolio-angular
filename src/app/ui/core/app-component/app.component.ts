import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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


  ngOnInit(): void {
    const currentLang = this.languageService.currentLang;
    const currentPath = window.location.pathname;

    // if the language is not in the URL, redirect
    if (!currentPath.startsWith(`/${currentLang}/`)) {
      this.languageService.redirectToLang(currentLang);
    }
  }

}
