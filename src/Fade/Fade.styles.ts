import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes fadeOut': {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    fadeIn: {
      animationDuration: `${theme.transitions.duration}s`,
      animationName: '$fadeIn',
    },
    fadeOut: {
      animationDuration: `${theme.transitions.duration}s`,
      animationName: '$fadeIn',
    },
    root: {},
  }),
  'Fade',
);
