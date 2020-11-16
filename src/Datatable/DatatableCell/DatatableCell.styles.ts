import { makeStyles } from '../../styles/makeStyles';
import { Theme } from '../../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      padding: theme.spacing.unit,
    },
  }),
  'DatatableCell',
);
