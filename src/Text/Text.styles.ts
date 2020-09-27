import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    body: {
      fontSize: theme.text.body.fontSize,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
    caption: {
      fontSize: theme.text.caption.fontSize,
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit,
    },
    defaultColor: {
      color: theme.palette.text,
    },
    heading: {
      fontSize: theme.text.heading.fontSize,
      marginBottom: 3 * theme.spacing.unit,
      marginTop: 3 * theme.spacing.unit,
    },
    inheritColor: {
      color: 'inherit',
    },
    root: {
      fontFamily: theme.text.fontFamily,
    },
    subheading: {
      fontSize: theme.text.subheading.fontSize,
      marginBottom: 2 * theme.spacing.unit,
      marginTop: 2 * theme.spacing.unit,
    },
  }),
  'Text',
);
