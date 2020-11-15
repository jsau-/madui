import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
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
      border: 0,
      borderRadius: theme.border.radius,
      color: theme.palette.grey[0],
      outline: 'none',
      padding: theme.spacing.unit,
    },
  }),
  'Button',
);
