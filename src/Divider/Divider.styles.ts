import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.divider,
      border: 'none',
      color: theme.palette.divider,
      height: 1,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
  }),
  'Divider',
);
