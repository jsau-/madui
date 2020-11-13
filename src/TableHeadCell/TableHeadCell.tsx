import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableHeadCell.styles';

export interface TableHeadCellProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  align: 'center' | 'left' | 'right';
  classes?: Record<string, string>;
};

export const TableHeadCell = React.forwardRef<HTMLTableHeaderCellElement, TableHeadCellProps>(function TableHeadCell(props: TableHeadCellProps, forwardedRef: React.Ref<HTMLTableHeaderCellElement>) {
  const classes = useStyles();

  const align = props?.align || 'left';

  return (
    <th
      className={clsx(
        classes.root,
        classes[align],
        props?.classes?.root,
        props?.classes?.[align],
        props?.className
      )}
      ref={forwardedRef}
    >
      {props.children}
    </th>
  );
});
