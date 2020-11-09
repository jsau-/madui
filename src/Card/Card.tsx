import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Card.styles';
import { Paper } from '../Paper';
import { Elevation } from '../types/Elevation';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  elevation?: Elevation;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  props: CardProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const classes = useStyles();
  const elevation = props.elevation || 'low';

  return (
    <Paper
      className={clsx(classes.root, props?.classes?.root, props?.className)}
      elevation={elevation}
      ref={forwardedRef}
    >
      {props.children}
    </Paper>
  );
});
