import { Component, Input, SimpleChanges } from '@angular/core';
import { Proyect } from '../../../domain/models/proyects.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons_frame, Icons_lang } from '../../../domain/icons/icons';

@Component({
  selector: 'proyect',
  standalone: true,
  imports: [],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss'
})
export class ProyectComponent {
  @Input()
  proyect!: Proyect;

  icons_lang = Icons_lang;
  icons_frame = Icons_frame;
  filteredIcons: { name: string; svg: string }[] = [];
  mergedIcons: { name: string; svg: SafeHtml }[] = [];

  ngOnInit(): void {
    if (this.proyect && this.proyect.techologies) {
      this.filteredIcons = [...this.icons_lang, ...this.icons_frame].filter(icon =>
        this.proyect.techologies!.includes(icon.name)
      );

      this.mergedIcons = this.filteredIcons.map(icon => ({
        ...icon,
        svg: this.sanitizer.bypassSecurityTrustHtml(icon.svg)
      }));
    }
  }

  constructor(private sanitizer: DomSanitizer) { }
}
