import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Button.styles';
import { Color } from '../types/Color';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  classes?: Record<string, string>;
  color?: Color,
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    props: ButtonProps,
    forwardedRef: React.Ref<HTMLButtonElement>,
  ) {
    const { classes, color: defaultColor, ...other } = props;

    const styles = useStyles();
    const color = defaultColor || 'grey';

    return (
      <button
        {...other}
        className={clsx(styles.root, styles[color], classes?.root, classes?.[color], props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </button>
    );
  },
);
