import { makeStyles } from '../styles/makeStyles';
import { Palette } from '../types/Palette';
import { Theme } from '../types/Theme';

const makePaletteStyles = (palette: Palette) => ({
  '&$checked': {
    '&$toggle': {
      backgroundColor: palette[800],
      transform: 'translateX(10px)',
    },
    '&$track': {
      backgroundColor: palette[200],
    },
  },
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    checked: {},
    root: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      height: 40,
      justifyContent: 'center',
      overflow: 'hidden',
      padding: theme.spacing.unit,
      position: 'relative',
      width: 60,
    },
    toggle: {
      backgroundColor: theme.palette.grey[0],
      borderRadius: '100%',
      boxShadow: theme.shadows.low,
      height: 24,
      position: 'absolute',
      transform: 'translateX(-10px)',
      transition: `background-color ${theme.transitions.durations.short}s ease, \
color ${theme.transitions.durations.short}s ease, \
transform ${theme.transitions.durations.short}s ease`,
      width: 24,
      zIndex: 1,
    },
    track: {
      backgroundColor: theme.palette.grey[400],
      borderRadius: theme.border.radius,
      height: 16,
      transition: `background-color ${theme.transitions.durations.short}s ease, \
color ${theme.transitions.durations.short}s ease`,
      width: '100%',
    },
    primary: makePaletteStyles(theme.palette.primary),
    error: makePaletteStyles(theme.palette.error),
    warning: makePaletteStyles(theme.palette.warning),
    success: makePaletteStyles(theme.palette.success),
    grey: makePaletteStyles(theme.palette.grey),
  }),
  'Switch',
);
