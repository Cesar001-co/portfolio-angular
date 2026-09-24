/**
 * Fragmento de texto enriquecido; `strong` resalta el fragmento.
 * Se genera a partir del formato "**énfasis**" de los JSON de i18n (ver RichTextComponent).
 */
export interface TextSegment {
  text: string;
  strong?: boolean;
}
