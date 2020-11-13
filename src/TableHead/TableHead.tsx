import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableHead.styles';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  classes?: Record<string, string>;
};

export const TableHead = React.forwardRef<HTMLTableSectionElement>(function TableHead(props: TableHeadProps, forwardedRef: React.Ref<HTMLTableSectionElement>) {
  const classes = useStyles();

  return (
    <thead
      className={clsx(classes.root, props?.classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {props.children}
    </thead>
  )
});
