import clsx from 'clsx';
import React from 'react';
import { useStyles } from './DatatableRow.styles';
import { DatatableCell } from '../DatatableCell';
import { DatatableColumns } from '../../types/DatatableColumns';
import { DatatableColumnOptions } from '../../types/DatatableColumnOptions';

export interface DatatableRowProps<T extends DatatableColumns>
  extends React.HTMLAttributes<HTMLTableRowElement> {
  classes?: Record<string, string>;
  columnOptions: DatatableColumnOptions<T>;
  data: T;
}

export const DatatableRow = React.forwardRef<
  HTMLTableRowElement,
  DatatableRowProps<DatatableColumns>
>(function DatatableRow<T extends DatatableColumns>(
  props: DatatableRowProps<T>,
  forwardedRef: React.Ref<HTMLTableRowElement>,
) {
  const { classes, columnOptions, data, ...other } = props;

  const styles = useStyles();

  const columnCells: React.ReactNode[] = [];

  for (const columnName in data) {
    if (!columnOptions[columnName]?.hide) {
      columnCells.push(
        <DatatableCell
          customRenderer={columnOptions[columnName]?.customRenderer}
          data={data[columnName]}
          key={columnName}
        />,
      );
    }
  }

  return (
    <tr
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {columnCells}
    </tr>
  );
});
