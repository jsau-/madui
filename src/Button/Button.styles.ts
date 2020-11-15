import { makeStyles } from '../styles/makeStyles';
import { Palette } from '../types/Palette';
import { Theme } from '../types/Theme';

const makeOutlinedStyles = (palette: Palette) => ({
  borderColor: palette[500],
  color: palette[500],
  '&:hover&:not($disabled)': {
    backgroundColor: palette[0],
    borderColor: palette[500],
  },
  '&:active&:not($disabled)': {
    backgroundColor: palette[100],
    borderColor: palette[600],
  },
});

const makeSolidStyles = (palette: Palette) => ({
  backgroundColor: palette[500],
  color: palette.contrastLight,
  '&:hover&:not($disabled)': {
    backgroundColor: palette[700],
  },
  '&:active&:not($disabled)': {
    backgroundColor: palette[800],
    color: palette[0],
  },
});

const makeStandardStyles = (palette: Palette) => ({
  color: palette[500],
  '&:hover&:not($disabled)': {
    backgroundColor: palette[0],
    color: palette[600],
  },
  '&:active&:not($disabled)': {
    backgroundColor: palette[100],
    color: palette[700],
  },
});

const makePaletteStyles = (palette: Palette) => ({
  '&$outlined': makeOutlinedStyles(palette),
  '&$solid': makeSolidStyles(palette),
  '&$standard': makeStandardStyles(palette),
});

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: theme.border.radius,
      borderWidth: 1,
      borderStyle: 'solid',
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      outline: 'none',
      padding: theme.spacing.unit,
      textTransform: 'capitalize',
      transition: `background-color ${theme.transitions.durations.short}s ease, \
color ${theme.transitions.durations.short}s ease`,
    },
    disabled: {
      opacity: theme.disabled.opacity,
    },
    outlined: {},
    solid: {},
    standard: {},
    grey: makePaletteStyles(theme.palette.grey),
    primary: makePaletteStyles(theme.palette.primary),
    error: makePaletteStyles(theme.palette.error),
    warning: makePaletteStyles(theme.palette.warning),
    success: makePaletteStyles(theme.palette.success),
  }),
  'Button',
);
