import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    grey: {
      '&:hover': {
        backgroundColor: theme.palette.grey[600],
      },
      /*
       * NB: This must be declared after the hover rule s.t. it takes precedence
       * over it!
       */
      '&:active': {
        backgroundColor: theme.palette.grey[700],
      },
      backgroundColor: theme.palette.grey[400],
    },
    primary: {
      '&:hover': {
        backgroundColor: theme.palette.primary[600],
      },
      /*
       * NB: This must be declared after the hover rule s.t. it takes precedence
       * over it!
       */
      '&:active': {
        backgroundColor: theme.palette.primary[700],
      },
      backgroundColor: theme.palette.primary[400],
    },
    root: {
      border: 0,
      borderRadius: theme.border.radius,
      color: theme.palette.grey[0],
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      outline: 'none',
      padding: theme.spacing.unit,
      textTransform: 'capitalize',
    },
  }),
  'Button',
);
