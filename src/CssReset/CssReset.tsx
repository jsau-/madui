import React from 'react';
import { useStyles } from './CssReset.styles';

export interface CssResetProps {
  children?: React.ReactNode;
}

/**
 * Apply global CSS styles to simplify both initial application
 * bootstrapping and writing of individual component styles.
 *
 * @see `src/CssReset/CssReset.styles.ts`
 */
export function CssReset(props: CssResetProps) {
  const { children } = props;

  useStyles();

  return <React.Fragment>{children}</React.Fragment>;
}
