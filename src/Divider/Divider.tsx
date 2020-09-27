import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Divider.styles';

export interface DividerProps {
  classes?: Record<string, string>;
  className?: string;
}

export const Divider: React.FunctionComponent<DividerProps> = (
  props: DividerProps,
) => {
  const classes = useStyles();

  return (
    <hr
      className={clsx(classes.root, props?.classes?.root, props?.className)}
      role="separator"
    />
  );
};
