import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Button.styles';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  classes?: Record<string, string>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    props: ButtonProps,
    forwardedRef: React.Ref<HTMLButtonElement>,
  ) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <button
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </button>
    );
  },
);
