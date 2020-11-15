type Contrast = 'light' | 'dark';

type PaletteShade = 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type PaletteShadeMap<T> = { [shade in PaletteShade]: T };

export interface Palette extends PaletteShadeMap<string> {
  contrastLight: string;
  contrastDark: string;
  contrasts: Record<PaletteShade, Contrast>;
}
