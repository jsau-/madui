import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    center: {
      textAlign: 'center',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    root: {
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      outline: 'none',
      padding: 2 * theme.spacing.unit,
      verticalAlign: 'middle',
    },
  }),
  'TableHeadCell',
);
