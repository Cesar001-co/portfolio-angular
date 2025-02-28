import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { ThemesService } from '../../../services/themes.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  settingsMenu = false;
  userTheme: string | null = '';
  navbarItems: any[] = [
    { ref: 'aboutme', section: $localize`About Me` },
    { ref: 'tech', section: $localize`Technologies` },
    { ref: 'projects', section: $localize`Projects` },
    // {ref: 'experience', section: 'Experience'},
    { ref: 'education', section: $localize`Education` }
  ]
  constructor(
    private _themesService: ThemesService
  ) {
    this.userTheme = this._themesService.getLightMode();
    if (this._themesService.getLightMode() === 'active') {
      this._themesService.ativeLightMode();
    }
  }

  changeTheme() {
    this._themesService.getLightMode() !== "active" ? this._themesService.ativeLightMode() : this._themesService.disableLightMode();
    this.userTheme = this._themesService.getLightMode();
  }

  openNav() {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    if (hamburgerContainer) {
      hamburgerContainer.classList.toggle('open');
    }
  }

  closeMenu(): void {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const checkbox = document.getElementById('burger') as HTMLInputElement;

    if (hamburgerContainer) {
      hamburgerContainer.classList.remove('open');
    }
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  toggleMenu() {
    this.settingsMenu = !this.settingsMenu;
}
}
