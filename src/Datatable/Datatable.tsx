import React from 'react';
import { DatatableRow } from './DatatableRow';
import { Table, TableProps } from '../Table';
import { TableBody } from '../TableBody';
import { TableHead } from '../TableHead';
import { TableHeadCell } from '../TableHeadCell';
import { TableRow } from '../TableRow';
import { DatatableColumns } from '../types/DatatableColumns';
import { DatatableColumnOptions } from '../types/DatatableColumnOptions';

export interface DatatableProps<T extends DatatableColumns> extends TableProps {
  columnOptions: DatatableColumnOptions<T>;
  data: T[];
}

export const Datatable = React.forwardRef<
  HTMLTableElement,
  DatatableProps<DatatableColumns>
>(function Datatable<T extends DatatableColumns>(
  props: DatatableProps<T>,
  forwardedRef: React.Ref<HTMLTableElement>,
) {
  const { columnOptions, data, ...other } = props;

  return (
    <Table {...other} ref={forwardedRef}>
      <TableHead>
        <TableRow>
          {Object.keys(columnOptions)
            .filter(columnName => !columnOptions[columnName]?.hide)
            .map(columnName => (
              <TableHeadCell align={columnOptions[columnName]?.align} key={columnName}>{columnName}</TableHeadCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((rowData, index) => (
          <DatatableRow
            columnOptions={columnOptions}
            data={rowData}
            key={index}
          />
        ))}
      </TableBody>
    </Table>
  );
});
