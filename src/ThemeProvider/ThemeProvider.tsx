import React from 'react';
import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Record<string, any>;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);
