import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    left: {
      flex: '0 0 auto',
      marginRight: 2 * theme.spacing.unit,
    },
    right: {
      flex: '0 0 auto',
      marginLeft: 2 * theme.spacing.unit,
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      paddingLeft: 2 * theme.spacing.unit,
      paddingRight: 2 * theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    title: {
      flex: '1 1 auto',
    },
  }),
  'CardHeader',
);
