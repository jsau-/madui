import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Button.styles';
import { Color } from '../types/Color';
import { InputVariant } from '../types/InputVariant';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  classes?: Record<string, string>;
  color?: Color;
  variant?: InputVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    props: ButtonProps,
    forwardedRef: React.Ref<HTMLButtonElement>,
  ) {
    const {
      classes,
      color: defaultColor,
      variant: defaultVariant,
      ...other
    } = props;

    const styles = useStyles();
    const color = defaultColor || 'grey';
    const variant = defaultVariant || 'solid';

    return (
      <button
        {...other}
        className={clsx(
          styles.root,
          styles[color],
          styles[variant],
          classes?.root,
          classes?.[color],
          classes?.[variant],
          props?.className,
        )}
        ref={forwardedRef}
      >
        {props.children}
      </button>
    );
  },
);
