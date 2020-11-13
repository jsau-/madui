import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableBody.styles';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  classes?: Record<string, string>;
}

export const TableBody = React.forwardRef<HTMLTableSectionElement>(
  function TableBody(
    props: TableBodyProps,
    forwardedRef: React.Ref<HTMLTableSectionElement>,
  ) {
    const classes = useStyles();

    return (
      <tbody
        className={clsx(classes.root, props?.classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </tbody>
    );
  },
);
