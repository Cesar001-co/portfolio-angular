import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  email = "cesarcamilo001@gmail.com";
  copyMessage: string = '';

  copyEmail() {
    const input = document.createElement('textarea');
    input.value = this.email;
    input.select();
    document.execCommand('copy');
    alert("Mail copied to the clipboard.");
  }

  openPDF() {
    window.open('assets/cv/CV_Cesar_Rodriguez.pdf', '_blank');
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
