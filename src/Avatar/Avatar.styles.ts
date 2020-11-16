import { getContrastForPaletteShade } from '../styles/getContrastForPaletteShade';
import { makeStyles } from '../styles/makeStyles';
import { Palette } from '../types/Palette';
import { Theme } from '../types/Theme';

const makePaletteStyles = (palette: Palette) => ({
  backgroundColor: palette[500],
  color: getContrastForPaletteShade(500, palette),
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      alignItems: 'center',
      borderRadius: '100%',
      display: 'flex',
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      height: 40,
      justifyContent: 'center',
      userSelect: 'none',
      width: 40,
    },
    grey: makePaletteStyles(theme.palette.grey),
    primary: makePaletteStyles(theme.palette.primary),
    error: makePaletteStyles(theme.palette.error),
    warning: makePaletteStyles(theme.palette.warning),
    success: makePaletteStyles(theme.palette.success),
  }),
  'Avatar',
);
