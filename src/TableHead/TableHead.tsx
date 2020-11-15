import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableHead.styles';

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  classes?: Record<string, string>;
}

export const TableHead = React.forwardRef<HTMLTableSectionElement>(
  function TableHead(
    props: TableHeadProps,
    forwardedRef: React.Ref<HTMLTableSectionElement>,
  ) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <thead
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </thead>
    );
  },
);
