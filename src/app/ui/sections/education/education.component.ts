import { Component } from '@angular/core';
import { Education } from '../../../domain/models/edu_exp.interface';
import { educationList } from '../../../domain/education/education';
import { TechIconsComponent } from "../../design/tech-icons/tech-icons.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'education',
  standalone: true,
  imports: [TechIconsComponent, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = educationList;

  endYear(year: number | null): string {
    return year ? year.toString() :  `Present`;
  }
}
