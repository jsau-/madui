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

export const useStyles = makeStyles(
  (theme: Theme) => ({
    disabled: {
      opacity: theme.disabled.opacity,
    },
    grey: {
      '&$outlined': makeOutlinedStyles(theme.palette.grey),
      '&$solid': makeSolidStyles(theme.palette.grey),
    },
    outlined: {
      background: 'transparent',
    },
    primary: {
      '&$outlined': makeOutlinedStyles(theme.palette.primary),
      '&$solid': makeSolidStyles(theme.palette.primary),
    },
    root: {
      borderRadius: theme.border.radius,
      borderWidth: 1,
      borderStyle: 'solid',
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      outline: 'none',
      padding: theme.spacing.unit,
      textTransform: 'capitalize',
    },
    solid: {
      borderColor: 'transparent',
    },
  }),
  'Button',
);
