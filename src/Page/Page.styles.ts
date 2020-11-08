import { makeStyles } from '../styles/makeStyles';

export const useStyles = makeStyles(
  () => ({
    content: {
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      overflow: 'auto',
    },
    footer: {
      flexGrow: 0,
      flexShrink: 0,
    },
    navbar: {
      flexGrow: 0,
      flexShrink: 0,
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    },
    sidebar: {
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      overflow: 'auto',
    },
    view: {
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      overflow: 'hidden',
    },
  }),
  'Page',
);
