import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    block: {
      whiteSpace: 'pre-wrap',
    },
    code: {
      fontFamily: 'inherit',
      fontSize: theme.text.body.fontSize,
    },
    inherit: {
      color: 'inherit',
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.constrast,
    },
    root: {
      borderRadius: theme.border.radius,
      fontFamily: theme.text.monoFontFamily,
      padding: theme.spacing.unit,
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.constrast,
    },
  }),
  'Code',
);
