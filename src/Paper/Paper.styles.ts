import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    high: {
      boxShadow: theme.shadows.high,
    },
    low: {
      boxShadow: theme.shadows.low,
    },
    medium: {
      boxShadow: theme.shadows.medium,
    },
    none: {},
    root: {
      backgroundColor: theme.background,
      borderRadius: theme.border.radius,
      overflow: 'hidden',
    },
    square: {
      borderRadius: 0,
    },
  }),
  'Paper',
);
