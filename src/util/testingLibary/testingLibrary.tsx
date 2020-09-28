/**
 * @fileoverview Export a custom version of `@testing-library/react`, where the
 * render function has been replaced with a custom version which wraps all
 * components in required providers. This allows us to render presentational
 * components which are dependent on <ThemeProvider />, for example.
 */

import { Rule } from 'jss';
import { JssProvider } from 'react-jss';
import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { createTheme } from '../../styles/createTheme';
import { ThemeProvider } from '../../ThemeProvider';

/**
 * When generating JSS classnames, don't post-process them at all;
 * just return exactly the rule name passed in. This allows us to easily
 * target classnames in tests.
 *
 * @example
 * ```javascript
 * // Component styles
 * const useStyles = makeStyles({
 *   root: { color: 'red' },
 *   primary: { color: 'blue' },
 * });
 *
 * // Component
 * const Component = () => {
 *   const classes = useStyles();
 *   return <div className={`${classes.root} ${classes.primary}`} />;
 * }
 *
 * // In test
 * const { container } = render(<Component />);
 * console.log(container.firstChild.classList);
 *
 * // Expected output
 * DOMTokenList { '0': 'root', '1': 'primary' }
 * ```
 */
const jssGenerateId = (rule: Rule): string => rule.key;

const defaultTheme = createTheme();

const AllTheProviders: React.FunctionComponent = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <JssProvider generateId={jssGenerateId}>
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  </JssProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method, using our required providers
export { customRender as render };
