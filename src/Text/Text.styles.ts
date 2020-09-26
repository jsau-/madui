import { makeStyles } from '../makeStyles';
import { Theme } from '../Theme';

export const useStyles = makeStyles({
  root: {
    fontFamily: ({ theme }: { theme: Theme }): string => theme.text.fontFamily,
  },
});
