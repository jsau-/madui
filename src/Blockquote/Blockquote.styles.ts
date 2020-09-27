import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles((theme: Theme) => ({
  inherit: {
    borderLeftColor: 'inherit',
  },
  none: {
    borderLeftColor: 'transparent',
  },
  primary: {
    borderLeftColor: theme.palette.primary.main,
  },
  root: {
    borderLeftWidth: theme.border.radius,
    borderLeftStyle: 'solid',
    padding: theme.spacing.unit,
  },
  secondary: {
    borderLeftColor: theme.palette.secondary.main,
  },
}), 'Blockquote');
