import React from 'react';
import { useStyles } from './CssReset.styles';

export interface CssResetProps {
  children?: React.ReactNode;
}

export function CssReset(props: CssResetProps) {
  const { children } = props;

  useStyles();

  return <React.Fragment>{children}</React.Fragment>;
}
