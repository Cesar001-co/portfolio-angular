import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'social-container',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './social-container.component.html',
  styleUrl: './social-container.component.scss'
})
export class SocialContainerComponent {
  email = "cesarcamilo001@gmail.com";
  copyMessage: string = '';

  private languageService = inject(LanguageService);
  private translate = inject(TranslateService);

  /* Copy email in to the clipboard */
  copyEmail() {
    const textarea = document.createElement('textarea');
    textarea.value = this.email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(this.translate.instant('social.ALERT'));
  }

  /* Open CV/HV */
  openPDF() {
    var cvPath = '';
    if (this.languageService.languageSignal().match('es')) {
      cvPath = 'HV_Cesar_Rodriguez'
    } else {
      cvPath = 'CV_Cesar_Rodriguez'
    }
    window.open(`assets/cv/${cvPath}.pdf`, '_blank');
  }

  /* Open link in a new tab */
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
