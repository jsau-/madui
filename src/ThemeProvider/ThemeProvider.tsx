import React from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../Theme';

export interface ThemeProviderProps<T extends Theme> {
  children: React.ReactNode;
  theme: T;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps<
  Theme
>> = <T extends Theme>(props: ThemeProviderProps<T>) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);
