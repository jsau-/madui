import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    inherit: {
      borderLeftColor: 'inherit',
    },
    none: {
      borderLeftColor: 'transparent',
    },
    primary: {
      borderLeftColor: theme.palette.primary.main,
    },
    root: {
      background: theme.palette.background,
      borderLeftStyle: 'solid',
      borderLeftWidth: theme.border.radius,
      margin: 0,
      padding: theme.spacing.unit,
    },
    secondary: {
      borderLeftColor: theme.palette.secondary.main,
    },
  }),
  'Blockquote',
);
