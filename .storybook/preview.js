import React from 'react';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';
import { createTheme } from '../src/createTheme';
import { ThemeProvider } from '../src/ThemeProvider';

const themes = {
  default: createTheme(),
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // See: https://www.chromatic.com/component?appId=5a375b97f4b14f0020b0cda3&name=Basics%7CIcon&buildNumber=13899
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: Object.keys(themes),
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme];

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
