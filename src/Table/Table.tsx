import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Table.styles';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  classes?: Record<string, string>;
}

export const Table = React.forwardRef<HTMLTableElement>(function Table(props: TableProps, forwardedRef: React.Ref<HTMLTableElement>) {
  const classes = useStyles();

  return (
    <table
      className={clsx(classes.root, props?.classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {props.children}
    </table>
  );
});
