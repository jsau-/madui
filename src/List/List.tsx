import clsx from 'clsx';
import React from 'react';
import { useStyles } from './List.styles';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  classes?: Record<string, string>;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(function List(
  props: ListProps,
  forwardedRef: React.Ref<HTMLUListElement>,
) {
  const classes = useStyles();

  return (
    <ul
      className={clsx(classes.root, props?.classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {props.children}
    </ul>
  );
});
