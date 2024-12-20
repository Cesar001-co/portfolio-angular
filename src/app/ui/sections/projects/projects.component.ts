import { Component } from '@angular/core';
import { Proyect } from '../../../domain/models/proyects.interface';
import { ProyectComponent } from '../../design/proyect/proyect.component';
import { mainProyects } from '../../../domain/proyects/proyects';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProyectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  mainProyects: Proyect[] = mainProyects;
}
