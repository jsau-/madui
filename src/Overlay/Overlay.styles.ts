import { makeStyles } from '../styles/makeStyles';

export const useStyles = makeStyles(
  () => ({
    root: {
      alignItems: 'center',
      animation: 'fadein 0.5s',
      background: 'rgba(0,0,0,0.7)',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  }),
  'Overlay',
);
