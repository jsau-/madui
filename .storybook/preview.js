import React from 'react';
import { createTheme } from '../src/createTheme';
import { darkTheme } from '../src/darkTheme';
import { lightTheme } from '../src/lightTheme';
import { ThemeProvider } from '../src/ThemeProvider';

const libraryThemes = {
  Dark_Theme: createTheme(darkTheme),
  Light_Theme: createTheme(lightTheme),
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Light_Theme',
    toolbar: {
      // See: https://www.chromatic.com/component?appId=5a375b97f4b14f0020b0cda3&name=Basics%7CIcon&buildNumber=13899
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: Object.keys(libraryThemes),
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = libraryThemes[context.globals.theme];

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
