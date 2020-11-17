import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Icon.styles';
import { Color } from '../types/Color';

const DEFAULT_ICON_SIZE_PX = 24;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  classes?: Record<string, string>;
  color?: Color | 'inherit';
  height?: number;
  width?: number;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  props: IconProps,
  forwardedRef: React.Ref<HTMLSpanElement>,
) {
  const {
    classes,
    color: defaultColor,
    height: defaultHeight,
    width: defaultWidth,
    ...other
  } = props;

  const styles = useStyles();

  const color = defaultColor || 'inherit';
  const height = defaultHeight || DEFAULT_ICON_SIZE_PX;
  const width = defaultWidth || DEFAULT_ICON_SIZE_PX;

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
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {props.children}
    </span>
  );
});
