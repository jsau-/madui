import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';
import { Palette } from '../types/Palette';

const makePaletteStyles = (palette: Palette) => ({
  '& $track': {
    backgroundColor: palette[200],
  },
  '& $progress': {
    backgroundColor: palette[500],
  },
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: 4,
      overflow: 'hidden',
      position: 'relative',
    },
    rounded: {
      borderRadius: theme.border.radius,
    },
    track: {
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    progress: {
      height: '100%',
      position: 'absolute',
      transition: `transform ${theme.transitions.durations.medium}s ease`,
      width: '100%',
    },
    primary: makePaletteStyles(theme.palette.primary),
    grey: makePaletteStyles(theme.palette.grey),
    error: makePaletteStyles(theme.palette.error),
    warning: makePaletteStyles(theme.palette.warning),
    success: makePaletteStyles(theme.palette.success),
  }),
  'LinearProgress',
);
