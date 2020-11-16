import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
      outline: 'none',
    },
  }),
  'TableRow',
);
