import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    lg: {
      padding: 2 * theme.spacing.unit,
    },
    md: {
      padding: theme.spacing.unit,
    },
    root: {},
    sm: {
      padding: 0.5 * theme.spacing.unit,
    },
    xl: {
      padding: 3 * theme.spacing.unit,
    },
    xs: {
      padding: 0.5 * theme.spacing.unit,
    },
    xxl: {
      padding: 4 * theme.spacing.unit,
    },
  }),
  'PageContent',
);
