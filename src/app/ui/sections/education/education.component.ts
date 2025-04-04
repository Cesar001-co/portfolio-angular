import { Component, effect, inject } from '@angular/core';
import { Education } from '../../../domain/models/edu_exp.interface';
import { educationList_es, educationList_en } from '../../../domain/education/education_en';
import { TechIconsComponent } from "../../design/tech-icons/tech-icons.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'education',
  standalone: true,
  imports: [TechIconsComponent, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = [];

  private languageService = inject(LanguageService);
  private translate = inject(TranslateService);

  constructor() {
    effect(() => {
      const language = this.languageService.getLanguage();
      this.education = language === 'es' ? educationList_es : educationList_en;
    })
  }

  endYear(year: number | null): string {
    return year ? year.toString() : this.translate.instant('sections.PROJ.PRESENT');
  }
}
