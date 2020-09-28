import React from 'react';
import { render } from '@testing-library/react';
import { useTheme } from '.';
import { createTheme } from '../styles/createTheme';
import { Theme } from '../types/Theme';
import { ThemeProvider } from '../ThemeProvider';

type ExampleTheme = Theme & { foo: string };

const exampleTheme: ExampleTheme = createTheme({
  foo: 'bar',
});

const TestComponent = () => {
  const theme = useTheme();
  return <p>{theme.foo}</p>;
}

describe('useTheme', () => {
  it('Gets theme from ThemeProvider context', () => {
    const { getByText } = render(
      <ThemeProvider theme={exampleTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText(exampleTheme.foo)).toBeTruthy();
  });
});
