import { Component, Input, SimpleChanges } from '@angular/core';
import { Proyect } from '../../../domain/models/proyects.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons_frame, Icons_lang } from '../../../domain/icons/icons';
import { TechIconsComponent } from "../tech-icons/tech-icons.component";

@Component({
  selector: 'proyect',
  standalone: true,
  imports: [TechIconsComponent],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss'
})
export class ProyectComponent {
  @Input()
  proyect!: Proyect;

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
