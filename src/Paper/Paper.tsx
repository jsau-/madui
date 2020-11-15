import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Paper.styles';
import { Elevation } from '../types/Elevation';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  elevation?: Elevation;
  square?: boolean;
}

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  function Paper(props: PaperProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { classes, elevation, square, ...other } = props;

    const styles = useStyles();

    return (
      <div
        {...other}
        className={clsx(
          styles.root,
          styles[elevation || 'none'],
          classes?.root,
          classes?.[elevation || 'none'],
          props?.className,
          {
            [styles.square]: square,
            [`${classes?.square}`]: square,
          },
        )}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  },
);
