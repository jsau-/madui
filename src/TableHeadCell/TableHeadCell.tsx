import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableHeadCell.styles';

export interface TableHeadCellProps
  extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  align?: 'center' | 'left' | 'right';
  classes?: Record<string, string>;
}

export const TableHeadCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  TableHeadCellProps
>(function TableHeadCell(
  props: TableHeadCellProps,
  forwardedRef: React.Ref<HTMLTableHeaderCellElement>,
) {
  const { align, classes, ...other } = props;

  const styles = useStyles();

  return (
    <th
      {...other}
      className={clsx(
        styles.root,
        styles[align || 'left'],
        classes?.root,
        classes?.[align || 'left'],
        props?.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </th>
  );
});
