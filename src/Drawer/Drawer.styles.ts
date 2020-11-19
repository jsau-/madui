import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    backdrop: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      visibility: 'hidden',
      zIndex: -1,
    },
    content: {
      position: 'absolute',
    },
    root: {
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      visibility: 'hidden',
      zIndex: theme.zIndex.drawer,
    },
    top: {
      top: 0,
      left: 0,
      right: 0,
    },
    left: {
      bottom: 0,
      top: 0,
      left: 0,
    },
    right: {
      bottom: 0,
      top: 0,
      right: 0,
    },
    bottom: {
      bottom: 0,
      left: 0,
      right: 0,
    },
    open: {
      visibility: 'visible',
    },
  }),
  'Drawer',
);
