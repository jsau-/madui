import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      paddingBottom: theme.spacing.unit,
      paddingLeft: 2 * theme.spacing.unit,
      paddingRight: 2 * theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
  }),
  'CardContent',
);
