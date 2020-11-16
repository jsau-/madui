import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Chip.styles';
import { Color } from '../types/Color';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  classes?: Record<string, string>;
  color?: Color;
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(function Chip(
  props: ChipProps,
  forwardedRef: React.Ref<HTMLSpanElement>,
) {
  const { classes, color: defaultColor, ...other } = props;

  const styles = useStyles();

  const color = defaultColor || 'grey';

  return (
    <span
      {...other}
      className={clsx(
        styles.root,
        styles[color],
        classes?.root,
        classes?.[color],
        props?.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </span>
  );
});
