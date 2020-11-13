import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-start',
      outline: 'none',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
      textAlign: 'left',
      width: '100%',
    },
  }),
  'ListItem',
);
