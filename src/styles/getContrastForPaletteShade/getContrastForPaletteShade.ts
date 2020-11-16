import { PaletteShade } from '../../types/PaletteShade';
import { Palette } from '../../types/Palette';

export const getContrastForPaletteShade = (
  shade: PaletteShade,
  palette: Palette,
) => {
  const contrast = palette.contrasts[shade];

  return 'dark' === contrast ? palette.contrastDark : palette.contrastLight;
};
