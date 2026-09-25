import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Página 404 (ruta comodín). Estilo "perros de Amazon": mensaje y una foto amable,
 * con salidas claras al inicio y a proyectos.
 */
@Component({
  selector: 'app-not-found',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Mismo recurso que el hero: se extiende bajo el header fijo para que el degradado se vea tras él.
  host: { class: 'block -mt-(--app-header-height) pt-(--app-header-height) bg-linear-to-b from-primary/15 via-transparent to-transparent' },
})
export class NotFoundComponent {}
