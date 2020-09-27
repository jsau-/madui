import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles((theme: Theme) => ({
  body: {
    fontSize: theme.text.body.fontSize,
  },
  caption: {
    fontSize: theme.text.caption.fontSize,
  },
  defaultColor: {
    color: theme.text.color,
  },
  heading: {
    fontSize: theme.text.heading.fontSize,
  },
  inheritColor: {
    color: 'inherit',
  },
  root: {
    fontFamily: theme.text.fontFamily,
  },
  subheading: {
    fontSize: theme.text.subheading.fontSize,
  },
}), 'Text');
