import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialContainerComponent } from '../../design/social-container/social-container.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [TranslateModule, SocialContainerComponent, NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
}
