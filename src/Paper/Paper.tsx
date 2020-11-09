import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Paper.styles';
import { Elevation } from '../types/Elevation';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  elevation?: Elevation;
  square?: boolean;
}

export const Paper: React.FunctionComponent<PaperProps> = (
  props: PaperProps,
) => {
  const classes = useStyles();
  const elevation = props.elevation || 'none';

  return (
    <div
      className={clsx(
        classes.root,
        classes[elevation],
        props?.classes?.root,
        props?.classes?.[elevation],
        props?.className,
        {
          [classes.square]: props.square,
          [`${props?.classes?.square}`]: props.square,
        },
      )}
    >
      {props.children}
    </div>
  );
};
