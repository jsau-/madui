import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    inherit: {
      color: 'inherit',
    },
    primary: {
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
      color: theme.palette.secondary.main,
    },
  }),
  'Link',
);
