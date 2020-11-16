import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Table.styles';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  classes?: Record<string, string>;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  function Table(props: TableProps, forwardedRef: React.Ref<HTMLTableElement>) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <table
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </table>
    );
  },
);
