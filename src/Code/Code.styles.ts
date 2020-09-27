import { makeStyles } from '../makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    whiteSpace: 'pre-wrap',
  },
  code: {
    fontSize: theme.text.body.fontSize,
  },
  inherit: {
    color: 'inherit',
  },
  primary: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.constrast,
  },
  root: {
    borderRadius: theme.border.radius,
    fontFamily: theme?.overrides?.code?.fontFamily || theme.text.fontFamily,
    padding: theme.spacing.unit,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.constrast,
  },
}));
