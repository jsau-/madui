import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardActions.styles';

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
}

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  function CardActions(
    props: CardActionsProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  },
);
