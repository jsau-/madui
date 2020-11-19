import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      position: 'fixed',
      zIndex: theme.zIndex.toast,
    },
    top: {
      /*
       * TODO: I'm pretty sure we can genericize this into some grouping component
       * which spaces items evenly within their container.
       */
      '& > *:not(:first-child)': {
        marginTop: theme.spacing.unit,
      },
      top: 2 * theme.spacing.unit,
      flexDirection: 'column',
    },
    bottom: {
      /*
       * TODO: I'm pretty sure we can genericize this into some grouping component
       * which spaces items evenly within their container.
       */
      '& > *:not(:first-child)': {
        marginBottom: theme.spacing.unit,
      },
      bottom: 2 * theme.spacing.unit,
      flexDirection: 'column-reverse',
    },
    left: {
      left: 2 * theme.spacing.unit,
    },
    right: {
      right: 2 * theme.spacing.unit,
    },
  }),
  'ToastManager',
);
