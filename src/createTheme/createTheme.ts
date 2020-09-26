import defaultsDeep from 'lodash/defaultsDeep';
import { defaultTheme } from '../defaultTheme';
import { Theme } from '../Theme';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export const createTheme = <T extends RecursivePartial<Theme>>(
  theme?: T,
): T & Theme => defaultsDeep({}, theme, defaultTheme);
