import { Component } from '@angular/core';
import { Proyect } from '../../../domain/models/proyects.interface';
import { ProyectComponent } from '../../design/proyect/proyect.component';
import { mainProyects } from '../../../domain/proyects/proyects';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProyectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  mainProyects: Proyect[] = mainProyects;
}
