import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardContent.styles';

export interface CardContentProps {
  children?: React.ReactNode;
  classes?: Record<string, string>;
  className?: string;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent(
    props: CardContentProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const classes = useStyles();

    return (
      <div
        className={clsx(classes.root, props?.classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  },
);
