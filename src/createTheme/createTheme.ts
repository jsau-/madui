import defaultsDeep from 'lodash/defaultsDeep';
import { lightTheme } from '../lightTheme';
import { RecursivePartial } from '../types/RecursivePartial';
import { Theme } from '../types/Theme';

/**
 * Create a theme object for use in <ThemeProvider />. Note that any required
 * theme fields that aren't provided will be taken from the default theme.
 *
 * @param theme Custom user theme.
 * @returns Theme object, with any un-specified values taken from the default
 * theme.
 */
export const createTheme = <T extends RecursivePartial<Theme>>(
  theme?: T,
): T & Theme => defaultsDeep({}, theme, lightTheme);
