import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Icon.styles';
import { Color } from '../types/Color';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  classes?: Record<string, string>;
  color?: Color | 'inherit';
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  props: IconProps,
  forwardedRef: React.Ref<HTMLSpanElement>,
) {
  const { classes, color: defaultColor, ...other } = props;

  const styles = useStyles();

  const color = defaultColor || 'inherit';

  return (
    <span
      {...other}
      className={clsx(
        styles.root,
        styles[color],
        classes?.root,
        classes?.[color],
        props.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </span>
  );
});
