import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      boxSizing: 'border-box',
      padding: theme.spacing.unit,
    },
    fullWidth: {
      maxWidth: '100%',
    },
    xs: {
      maxWidth: theme.breakpoints.xs,
    },
    sm: {
      maxWidth: theme.breakpoints.sm,
    },
    md: {
      maxWidth: theme.breakpoints.md,
    },
    lg: {
      maxWidth: theme.breakpoints.lg,
    },
    xl: {
      maxWidth: theme.breakpoints.xl,
    },
    xxl: {
      maxWidth: theme.breakpoints.xxl,
    },
  }),
  'Dialog',
);
