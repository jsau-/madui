import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '.';
import { createTheme } from '../createTheme';
import { useTheme } from '../useTheme';

const exampleTheme = createTheme({
  foo: 'bar',
});

const TestComponent = () => {
  const theme = useTheme();
  return <p>{JSON.stringify(theme)}</p>;
};

describe('<ThemeProvider />', () => {
  it('Provides the theme', () => {
    const { getByText } = render(
      <ThemeProvider theme={exampleTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText(JSON.stringify(exampleTheme))).toBeTruthy();
  });
});
