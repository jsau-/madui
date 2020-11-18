import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    backdrop: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      visibility: 'hidden',
      zIndex: -1,
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      visibility: 'hidden',
      zIndex: theme.zIndex.modal,
    },
    open: {
      visibility: 'visible',
    },
  }),
  'Modal',
);
