import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
