import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.primary[500],
      borderRadius: '100%',
      color: theme.palette.primary.contrastLight,
      display: 'flex',
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      height: 40,
      justifyContent: 'center',
      userSelect: 'none',
      width: 40,
    },
  }),
  'Avatar',
);
