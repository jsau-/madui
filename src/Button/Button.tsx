import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Button.styles';
import { Color } from '../types/Color';
import { InputVariant } from '../types/InputVariant';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  classes?: Record<string, string>;
  color?: Color;
  disabled?: boolean;
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
      disabled,
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
          {
            [styles.disabled]: disabled,
          },
          classes?.root,
          classes?.[color],
          classes?.[variant],
          {
            [`${classes?.disabled}`]: disabled,
          },
          props?.className,
        )}
        disabled={disabled}
        ref={forwardedRef}
      >
        {props.children}
      </button>
    );
  },
);
