import { Component, inject, SimpleChange, SimpleChanges } from '@angular/core';
import { ThemesService } from '../../../services/themes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  settingsMenu = false;
  
  navbarItems: any[] = [
    { ref: 'aboutme', section: `About Me` },
    { ref: 'tech', section: `Technologies` },
    { ref: 'projects', section: `Projects` },
    // {ref: 'experience', section: 'Experience'},
    { ref: 'education', section: `Education` }
  ]

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

  // scroll to section
  scrollTo(ref: string) {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
