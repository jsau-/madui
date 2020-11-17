import React from 'react';
import { DatatableCell } from '../DatatableCell';
import { TableRow, TableRowProps } from '../../TableRow';
import { DatatableColumns } from '../../types/DatatableColumns';
import { DatatableColumnOptions } from '../../types/DatatableColumnOptions';

export interface DatatableRowProps<T extends DatatableColumns>
  extends TableRowProps {
  columnOptions: DatatableColumnOptions<T>;
  data: T;
  innerRef?: React.Ref<HTMLTableRowElement>;
}

/*
 * NB: To workaround Typescript not forwarding generics in higher order
 * functions, we've had to resort to using normal FCs here...
 *
 * TODO: Can we standardise this somehow?
 */
export function DatatableRow<T extends DatatableColumns>(
  props: DatatableRowProps<T>,
) {
  const { columnOptions, data, innerRef, ...other } = props;

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
    <TableRow {...other} ref={innerRef}>
      {columnCells}
    </TableRow>
  );
}
