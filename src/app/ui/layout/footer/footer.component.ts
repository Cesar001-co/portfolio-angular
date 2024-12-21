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
