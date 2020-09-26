import React from 'react';
import { createTheming } from 'react-jss';

const ThemeContext = React.createContext({});

export const theming = createTheming(ThemeContext);
