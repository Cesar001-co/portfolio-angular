import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons_frame, Icons_lang } from '../../../domain/icons/icons';

@Component({
  selector: 'tech-icons',
  standalone: true,
  imports: [],
  templateUrl: './tech-icons.component.html',
  styleUrl: './tech-icons.component.scss'
})
export class TechIconsComponent {
@Input()
  tech!: string[];

  icons_lang = Icons_lang;
  icons_frame = Icons_frame;
  filteredIcons: { name: string; svg: string }[] = [];
  mergedIcons: { name: string; svg: SafeHtml }[] = [];

  ngOnInit(): void {
    if (this.tech) {
      this.filteredIcons = [...this.icons_lang, ...this.icons_frame].filter(icon =>
        this.tech!.includes(icon.name)
      );

      this.mergedIcons = this.filteredIcons.map(icon => ({
        ...icon,
        svg: this.sanitizer.bypassSecurityTrustHtml(icon.svg)
      }));
    }
  }

  constructor(private sanitizer: DomSanitizer) { }
}
