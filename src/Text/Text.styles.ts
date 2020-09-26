import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles((theme: Theme) => ({
  body: {
    fontSize: theme.text.body.fontSize,
  },
  caption: {
    fontSize: theme.text.caption.fontSize,
  },
  heading: {
    fontSize: theme.text.heading.fontSize,
  },
  root: {
    color: theme.text.color,
    fontFamily: theme.text.fontFamily,
  },
  subheading: {
    fontSize: theme.text.subheading.fontSize,
  },
}));
