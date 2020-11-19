import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      maxWidth: 200,
    },
    actions: {
      flexGrow: 0,
      flexShrink: 0,
      marginLeft: theme.spacing.unit,
    },
    content: {
      alignItems: 'center',
      display: 'flex',
      padding: theme.spacing.unit,
    },
    icon: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      marginRight: 2 * theme.spacing.unit,
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
    },
    title: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
    progress: {},
    subtitle: {
      marginTop: 0,
      marginBottom: theme.spacing.unit,
    },
  }),
  'Toast',
);
