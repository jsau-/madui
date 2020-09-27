import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardContent.styles';

export interface CardContentProps {
  children?: React.ReactNode;
  classes?: Record<string, string>;
  className?: string;
}

export const CardContent: React.FunctionComponent<CardContentProps> = (
  props: CardContentProps,
) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props?.classes?.root, props?.className)}>
      {props.children}
    </div>
  );
};
