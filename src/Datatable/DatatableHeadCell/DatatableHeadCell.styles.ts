import { makeStyles } from '../../styles/makeStyles';
import { Theme } from '../../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    sorticon: {
      marginLeft: theme.spacing.unit,
      verticalAlign: 'inherit',
    },
  }),
  'DatatableHeadCell',
);
