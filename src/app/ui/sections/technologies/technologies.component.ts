import { Component } from '@angular/core';
import { Icons_frame, Icons_lang } from '../../../domain/icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'technologies',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  icons_lang: { name: string; svg: SafeHtml }[] = [];
  icons_frame:{ name: string; svg: SafeHtml }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.icons_lang = Icons_lang.map(icon => ({
      ...icon,
      svg: this.sanitizer.bypassSecurityTrustHtml(icon.svg)
    }));

    this.icons_frame = Icons_frame.map(icon => ({
      ...icon,
      svg: this.sanitizer.bypassSecurityTrustHtml(icon.svg)
    }));
  }
}
