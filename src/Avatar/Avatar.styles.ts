import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    grey: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.grey.contrastLight,
    },
    primary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.primary.contrastLight,
    },
    root: {
      alignItems: 'center',
      borderRadius: '100%',
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
