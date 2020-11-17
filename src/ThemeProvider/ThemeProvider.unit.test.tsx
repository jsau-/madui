import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '.';
import { createTheme } from '../styles/createTheme';
import { Theme } from '../types/Theme';
import { useTheme } from '../useTheme';

type ExampleTheme = Theme & { foo: string };

const exampleTheme: ExampleTheme = createTheme({
  foo: 'bar',
});

const TestComponent = () => {
  const theme: ExampleTheme = useTheme();
  return <p>{theme.foo}</p>;
};

describe('<ThemeProvider />', () => {
  it('Provides the theme', () => {
    const { getByText } = render(
      <ThemeProvider theme={exampleTheme}>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(getByText(exampleTheme.foo)).toBeTruthy();
  });
});
