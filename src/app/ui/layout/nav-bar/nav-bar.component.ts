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
  userTheme: string | null = '';
  
  constructor (
    private _themesService: ThemesService
  ) {
    if (this._themesService.getLightMode() === 'active') {
      this._themesService.ativeLightMode();
    }
  }

  changeTheme(){
    this._themesService.getLightMode() !== "active" ? this._themesService.ativeLightMode() : this._themesService.disableLightMode();
  }
}
