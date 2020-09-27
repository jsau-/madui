import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      borderStyle: 'solid',
      borderWidth: 1,
      color: theme.palette.divider,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
  }),
  'Divider',
);
