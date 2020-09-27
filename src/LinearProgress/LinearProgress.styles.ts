import { makeStyles } from '../makeStyles';
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
      transition: 'transform 0.2s ease',
      width: '100%',
    },
    root: {
      borderRadius: 4,
      height: 2,
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
