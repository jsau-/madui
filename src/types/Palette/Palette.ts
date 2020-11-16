import { Contrast } from '../Contrast';
import { PaletteShade } from '../PaletteShade';

export type Palette = { [shade in PaletteShade]: string } & {
  contrastLight: string;
  contrastDark: string;
  contrasts: Record<PaletteShade, Contrast>;
};
