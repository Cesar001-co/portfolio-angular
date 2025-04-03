import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  email = "cesarcamilo001@gmail.com";
  copyMessage: string = '';

  copyEmail() {
    const textarea = document.createElement('textarea');
    textarea.value = this.email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Mail copied to the clipboard.');
  }

  openPDF() {
    window.open('assets/cv/CV_Cesar_Rodriguez.pdf', '_blank');
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
