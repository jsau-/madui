import { makeStyles } from '../makeStyles';
import { Theme } from '../Theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.text.color,
    fontFamily: theme.text.fontFamily,
  },
}));
