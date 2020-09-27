import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.divider,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.border.radius,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
  }),
  'Divider',
);
