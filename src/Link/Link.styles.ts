import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    inherit: {
      color: 'inherit',
    },
    primary: {
      '&:hover': {
        color: theme.palette.primary.dark,
      },
      color: theme.palette.primary.main,
    },
    root: {
      '&:hover': {
        textDecoration: 'underline',
      },
      fontFamily: theme.text.fontFamily,
      textDecoration: 'none',
    },
    secondary: {
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
      color: theme.palette.secondary.main,
    },
  }),
  'Link',
);
