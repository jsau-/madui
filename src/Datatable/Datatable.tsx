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
  innerRef?: React.Ref<HTMLTableElement>;
}

/*
 * NB: To workaround Typescript not forwarding generics in higher order
 * functions, we've had to resort to using normal FCs here...
 *
 * TODO: Can we standardise this somehow?
 */
export const Datatable = function Datatable<T extends DatatableColumns>(
  props: DatatableProps<T>,
) {
  const { columnOptions, data, innerRef, ...other } = props;

  return (
    <Table {...other} ref={innerRef}>
      <TableHead>
        <TableRow>
          {Object.keys(columnOptions)
            .filter(columnName => !columnOptions[columnName]?.hide)
            .map(columnName => (
              <TableHeadCell
                align={columnOptions[columnName]?.align}
                key={columnName}
              >
                {columnName}
              </TableHeadCell>
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
};
