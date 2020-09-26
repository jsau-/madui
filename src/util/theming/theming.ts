import React from 'react';
import { createTheming } from 'react-jss';

const ThemeContext = React.createContext({});

const theming = createTheming(ThemeContext);

export { theming };
