import React from 'react';
import { render } from '@testing-library/react';
import { useTheme } from '.';
import { createTheme } from '../createTheme';
import { ThemeProvider } from '../ThemeProvider';

const exampleTheme = createTheme({
  foo: 'bar',
});

const TestComponent = () => {
  const theme = useTheme();
  return <p>{JSON.stringify(theme)}</p>;
}

describe('useTheme', () => {
  it('Gets theme from ThemeProvider context', () => {
    const { getByText } = render(
      <ThemeProvider theme={exampleTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText(JSON.stringify(exampleTheme))).toBeTruthy();
  });
});
