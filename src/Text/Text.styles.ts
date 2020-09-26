import { createUseStyles } from 'react-jss';
import { Theme } from '../Theme';
import { theming } from '../util/theming';

export const useStyles = createUseStyles(
  {
    root: {
      fontFamily: ({ theme }: { theme: Theme }): string =>
        theme.text.fontFamily,
    },
  },
  { theming },
);
