import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      maxWidth: 400,
    },
    actions: {
      flexGrow: 0,
      flexShrink: 0,
      marginLeft: theme.spacing.unit,
    },
    content: {
      alignItems: 'center',
      display: 'inline-flex',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    icon: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      marginRight: theme.spacing.unit,
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      padding: theme.spacing.unit,
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
