import React from 'react';
import { defaultTheme } from '../defaultTheme';
import { Theme } from '../Theme';

export const ThemeContext = React.createContext<Theme>(defaultTheme);
