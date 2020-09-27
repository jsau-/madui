import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Card.styles';
import { Elevation } from '../types/Elevation';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  elevation?: Elevation;
}

export const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  const classes = useStyles();

  const elevation = props.elevation || 'low';

  return (
    <div
      className={clsx(
        classes.root,
        classes[elevation],
        props?.classes?.root,
        props?.classes?.[elevation],
        props?.className,
      )}
    >
      {props.children}
    </div>
  )
}
