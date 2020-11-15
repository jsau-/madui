import clsx from 'clsx';
import React from 'react';
import { useStyles } from './LinearProgress.styles';
import { Color } from '../types/Color';
import { clamp } from '../utils/clamp';

export interface LinearProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  color?: Color;
  max?: number;
  min?: number;
  rounded?: boolean;
  value?: number;
}

export const LinearProgress = React.forwardRef<
  HTMLDivElement,
  LinearProgressProps
>(function LinearProgress(
  props: LinearProgressProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const {
    classes,
    color: defaultColor,
    max: defaultMax,
    min: defaultMin,
    rounded,
    value: defaultValue,
    ...other
  } = props;

  const styles = useStyles();

  const color = defaultColor || 'primary';
  const max = defaultMax || 100;
  const min = defaultMin || 0;
  const value = clamp(defaultValue || 0, min, max);

  const progressPercentage = ((value - min) / (max - min)) * 100.0;

  const inlineProgressStyles = {
    transform: `translateX(-${100.0 - progressPercentage}%)`,
  };

  return (
    <div
      {...other}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className={clsx(
        styles.root,
        styles[color],
        {
          [styles.rounded]: rounded,
        },
        classes?.root,
        classes?.[color],
        {
          [`${classes?.rounded}`]: rounded,
        },
        props?.className,
      )}
      ref={forwardedRef}
      role="progressbar"
    >
      <div className={clsx(styles.track, classes?.track)} />
      <div
        className={clsx(styles.progress, classes?.progress)}
        style={inlineProgressStyles}
      />
    </div>
  );
});
