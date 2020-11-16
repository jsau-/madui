import React from 'react';
import { DatatableCell } from '../DatatableCell';
import { TableRow, TableRowProps } from '../../TableRow';
import { DatatableColumns } from '../../types/DatatableColumns';
import { DatatableColumnOptions } from '../../types/DatatableColumnOptions';

export interface DatatableRowProps<T extends DatatableColumns>
  extends TableRowProps {
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
  const { columnOptions, data, ...other } = props;

  const columnCells: React.ReactNode[] = [];

  for (const columnName in data) {
    if (!columnOptions[columnName]?.hide) {
      columnCells.push(
        <DatatableCell
          align={columnOptions[columnName]?.align}
          customRenderer={columnOptions[columnName]?.customRenderer}
          data={data[columnName]}
          key={columnName}
        />,
      );
    }
  }

  return (
    <TableRow {...other} ref={forwardedRef}>
      {columnCells}
    </TableRow>
  );
});
