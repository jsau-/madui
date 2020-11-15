import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardContent.styles';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent(
    props: CardContentProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  },
);
