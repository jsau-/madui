import React from 'react';
import { createTheming } from 'react-jss';
import { createTheme } from '../../createTheme';

const defaultTheme = createTheme();

const ThemeContext = React.createContext(defaultTheme);

export const theming = createTheming(ThemeContext);
