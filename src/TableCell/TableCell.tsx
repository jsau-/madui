import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableCell.styles';

export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  align: 'center' | 'left' | 'right';
  classes?: Record<string, string>;
}

export const TableCell = React.forwardRef<
  HTMLTableDataCellElement,
  TableCellProps
>(function TableCell(
  props: TableCellProps,
  forwardedRef: React.Ref<HTMLTableDataCellElement>,
) {
  const classes = useStyles();

  const align = props?.align || 'left';

  return (
    <td
      className={clsx(
        classes.root,
        classes[align],
        props?.classes?.root,
        props?.classes?.[align],
        props?.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </td>
  );
});
