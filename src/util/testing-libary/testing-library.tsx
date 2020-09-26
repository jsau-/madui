import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { createTheme } from '../../createTheme';
import { ThemeProvider } from '../../ThemeProvider';

const defaultTheme = createTheme();

const AllTheProviders: React.FunctionComponent = ({
  children,
}: {
  children?: React.ReactNode;
}) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method, using our required providers
export { customRender as render };
