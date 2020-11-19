import { belowWidth } from '../styles/breakpoint/belowWidth';
import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      maxWidth: 400,
      position: 'fixed',
      zIndex: theme.zIndex.toast,
      [belowWidth(theme.breakpoints.sm)]: {
        maxWidth: 'unset',
      },
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
      alignItems: 'flex-start',
      left: 2 * theme.spacing.unit,
      [belowWidth(theme.breakpoints.sm)]: {
        alignItems: 'unset',
        right: 2 * theme.spacing.unit,
      },
    },
    right: {
      alignItems: 'flex-end',
      right: 2 * theme.spacing.unit,
      [belowWidth(theme.breakpoints.sm)]: {
        alignItems: 'unset',
        left: 2 * theme.spacing.unit,
      },
    },
  }),
  'ToastManager',
);
