import { Contrast } from '../../types/Contrast';
import { PaletteShade } from '../../types/PaletteShade';
import { Palette } from '../../types/Palette';

export const getContrastForPaletteShade = (
  shade: PaletteShade,
  palette: Palette,
) => {
  const contrast = palette.contrasts[shade];

  const contrastMap: Record<Contrast, string> = {
    light: palette.contrastLight,
    dark: palette.contrastDark,
  };

  return contrastMap[contrast];
};
