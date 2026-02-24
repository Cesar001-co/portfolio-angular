import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsButtonComponent } from '../../design/settings-button/settings-button.component';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SettingsButtonComponent],
  template: '<router-outlet></router-outlet><settings-button></settings-button>',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly previusTitle: string = 'Cesar.dev';
  
  constructor (
    private titleService: Title, 
    private languageServie: LanguageService
  ) {}

  @HostListener('window:blur')
  onBlur() {
    this.titleService.setTitle(this.languageServie.getLanguage() === 'es' ? `¡No te vayas! ¡Vuelve! 😱` : `Don't go! Come back! 😱`);
  }

  @HostListener('window:focus')
  onFocus() {
    this.titleService.setTitle(this.previusTitle);
  }
  
}