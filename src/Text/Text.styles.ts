import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    body1: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.body1,
      fontWeight: 400,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
    body2: {
      color: theme.palette.grey[800],
      fontSize: theme.text.sizes.body2,
      fontWeight: 400,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
    caption: {
      color: theme.palette.grey[800],
      fontSize: theme.text.sizes.caption,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h1: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h1,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h2: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h2,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h3: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h3,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h4: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h4,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h5: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h5,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    h6: {
      color: theme.palette.grey[900],
      fontSize: theme.text.sizes.h6,
      fontWeight: 600,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
    root: {
      fontFamily: theme.text.fontFamily,
    },
  }),
  'Text',
);
