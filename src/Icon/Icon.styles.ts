import { makeStyles } from '../styles/makeStyles';
import { Palette } from '../types/Palette';
import { Theme } from '../types/Theme';

const makePaletteStyles = (palette: Palette) => ({
  color: palette[500],
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      height: 24,
      justifyContent: 'center',
      width: 24,
    },
    inherit: {
      color: 'inherit',
    },
    primary: makePaletteStyles(theme.palette.primary),
    grey: makePaletteStyles(theme.palette.grey),
    error: makePaletteStyles(theme.palette.error),
    warning: makePaletteStyles(theme.palette.warning),
    success: makePaletteStyles(theme.palette.success),
  }),
  'Icon',
);
