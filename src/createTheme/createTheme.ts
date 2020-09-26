import defaultsDeep from 'lodash/defaultsDeep';
import { Theme } from './Theme';
import { defaultTheme } from './defaultTheme';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export const createTheme = <
  T extends RecursivePartial<Theme> & Record<string, any>
>(
  theme?: T,
): T & Theme => defaultsDeep({}, theme, defaultTheme);
