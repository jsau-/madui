import { makeStyles } from '../styles/makeStyles';

export const useStyles = makeStyles(
  () => ({
    button: {
      minWidth: 40,
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  }),
  'Pagination',
);
