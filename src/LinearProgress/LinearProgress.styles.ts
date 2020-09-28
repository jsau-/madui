import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    inherit: {
      '& $track, & $progress': {
        backgroundColor: 'inherit',
      },
    },
    primary: {
      '& $track, & $progress': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    progress: {
      height: '100%',
      position: 'absolute',
      transition: `transform ${theme.transitions.duration}s ease`,
      width: '100%',
    },
    root: {
      borderRadius: 4,
      height: 4,
      overflow: 'hidden',
      position: 'relative',
    },
    secondary: {
      '& $track, & $progress': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    track: {
      height: '100%',
      opacity: 0.2,
      position: 'absolute',
      width: '100%',
    },
  }),
  'LinearProgress',
);
