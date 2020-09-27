/**
 * @fileoverview Custom namespaced react-jss context, to allow multiple
 * libraries using react-jss to work side-by-side in a single application.
 *
 * @see https://cssinjs.org/react-jss/?v=v10.4.0#using-custom-theming-context
 */

import React from 'react';
import { createTheming } from 'react-jss';
import { createTheme } from '../../createTheme';

const defaultTheme = createTheme();

const ThemeContext = React.createContext(defaultTheme);

export const theming = createTheming(ThemeContext);
