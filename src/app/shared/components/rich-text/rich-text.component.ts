import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { TextSegment } from '@shared/models/text-segment';

/** Divide "texto **énfasis** texto" en fragmentos; los impares quedan entre ** y se resaltan. */
export const parseEmphasis = (text: string): TextSegment[] =>
  text
    .split('**')
    .map((part, index) => ({ text: part, strong: index % 2 === 1 }))
    .filter(segment => segment.text.length > 0);

/**
 * Texto con énfasis marcado con **doble asterisco** (formato usado en los JSON de i18n).
 * Renderiza <strong> sin innerHTML, así las traducciones no pueden inyectar HTML.
 */
@Component({
  selector: 'app-rich-text',
  imports: [],
  // En una sola línea: los saltos entre fragmentos se renderizarían como espacios.
  template: `@for (segment of segments(); track $index) {@if (segment.strong) {<strong class="font-semibold text-color">{{ segment.text }}</strong>} @else {<span>{{ segment.text }}</span>}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextComponent {
  readonly text = input.required<string>();

  protected readonly segments = computed(() => parseEmphasis(this.text()));
}
