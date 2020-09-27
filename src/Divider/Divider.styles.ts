import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.divider,
      border: 'none',
      color: theme.palette.divider,
      height: 1,
      padding: 0,
      margin: 0,
    },
  }),
  'Divider',
);
