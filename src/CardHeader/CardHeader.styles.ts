import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    left: {
      flex: '0 0 auto',
      marginRight: 2 * theme.spacing.unit,
    },
    right: {
      flex: '0 0 auto',
      marginRight: 2 * theme.spacing.unit,
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      padding: 2 * theme.spacing.unit,
    },
    title: {
      flex: '1 1 auto',
    },
  }),
  'CardHeader',
);
