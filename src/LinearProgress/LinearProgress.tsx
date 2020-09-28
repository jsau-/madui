import clsx from 'clsx';
import React from 'react';
import { useStyles } from './LinearProgress.styles';
import { Color } from '../types/Color';
import { clamp } from '../utils/clamp';

export interface LinearProgressProps {
  classes?: Record<string, string>;
  className?: string;
  color?: Color;
  max?: number;
  min?: number;
  value?: number;
}

export const LinearProgress: React.FunctionComponent<LinearProgressProps> = (
  props: LinearProgressProps,
) => {
  const classes = useStyles();

  const color = props.color || 'primary';

  const max = props.max || 100;
  const min = props.min || 0;
  const value = clamp(props.value || 0, min, max);

  const progressPercentage = ((value - min) / (max - min)) * 100.0;
  const inlineProgressStyles = {
    transform: `translateX(-${100.0 - progressPercentage}%)`,
  };

  return (
    <div
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className={clsx(
        classes.root,
        classes[color],
        props?.classes?.root,
        props?.classes?.[color],
        props?.className,
      )}
      role="progressbar"
    >
      <div className={clsx(classes.track, props?.classes?.track)} />
      <div
        className={clsx(classes.progress, props?.classes?.progress)}
        style={inlineProgressStyles}
      />
    </div>
  );
};
