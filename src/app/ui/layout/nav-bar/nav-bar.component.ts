import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  settingsMenu = false;
  
  navbarItems: any[] = [
    { ref: 'aboutme', section: 'ABOT' },
    { ref: 'tech', section: 'TECH' },
    { ref: 'projects', section: 'PROJ' },
    // {ref: 'experience', section: 'Experience'},
    { ref: 'education', section: 'EDUC' }
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

  /* Scroll to section */
  scrollTo(ref: string) {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
