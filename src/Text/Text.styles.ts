import { makeStyles } from '../makeStyles';
import { Theme } from '../Theme';

export const useStyles = makeStyles({
  root: {
    color: ({ theme }: { theme: Theme }): string => theme.text.color,
    fontFamily: ({ theme }: { theme: Theme }): string => theme.text.fontFamily,
  },
});
