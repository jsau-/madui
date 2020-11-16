import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableCell.styles';

export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  align?: 'center' | 'left' | 'right';
  classes?: Record<string, string>;
}

export const TableCell = React.forwardRef<
  HTMLTableDataCellElement,
  TableCellProps
>(function TableCell(
  props: TableCellProps,
  forwardedRef: React.Ref<HTMLTableDataCellElement>,
) {
  const { align, classes, ...other } = props;

  const styles = useStyles();

  return (
    <td
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
    </td>
  );
});
