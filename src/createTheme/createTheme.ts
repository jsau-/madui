import defaultsDeep from 'lodash/defaultsDeep';
import { defaultTheme } from '../defaultTheme';
import { RecursivePartial } from '../types/RecursivePartial';
import { Theme } from '../types/Theme';

export const createTheme = <T extends RecursivePartial<Theme>>(
  theme?: T,
): T & Theme => defaultsDeep({}, theme, defaultTheme);
