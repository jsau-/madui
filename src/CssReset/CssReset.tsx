import React from 'react';
import { useStyles } from './CssReset.styles';

export interface CssResetProps {
  children?: React.ReactNode;
}

/**
 * Apply global CSS styles to simplify both initial application
 * bootstrapping and writing of individual component styles.
 *
 * NB: It doesn't seem like Storybook enjoys hot-reloading when this component
 * changes, likely due to it being used in `.storybook/preview.js`.
 *
 * @see `src/CssReset/CssReset.styles.ts`
 */
export function CssReset(props: CssResetProps) {
  const { children } = props;

  useStyles();

  return <React.Fragment>{children}</React.Fragment>;
}
