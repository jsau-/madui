import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    card: {
      margin: theme.spacing.unit,
    },
    root: {
      maxHeight: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
