import { getContrastForPaletteShade } from '../styles/getContrastForPaletteShade';
import { makeStyles } from '../styles/makeStyles';
import { Palette } from '../types/Palette';
import { Theme } from '../types/Theme';

const makePaletteStyle = (palette: Palette) => ({
  backgroundColor: palette[400],
  color: getContrastForPaletteShade(400, palette),
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      borderRadius: theme.border.radius,
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.caption,
      padding: theme.spacing.unit,
      userSelect: 'none',
    },
    primary: makePaletteStyle(theme.palette.primary),
    grey: makePaletteStyle(theme.palette.grey),
    error: makePaletteStyle(theme.palette.error),
    warning: makePaletteStyle(theme.palette.warning),
    success: makePaletteStyle(theme.palette.success),
  }),
  'Chip',
);
