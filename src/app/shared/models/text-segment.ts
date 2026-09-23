/**
 * Fragmento de texto enriquecido. Un párrafo es una lista de fragmentos;
 * `strong` resalta el fragmento. Evita usar innerHTML para textos con énfasis.
 */
export interface TextSegment {
  text: string;
  strong?: boolean;
}

export type RichParagraph = readonly TextSegment[];
