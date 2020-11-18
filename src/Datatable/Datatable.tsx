import React from 'react';
import { DatatableHeadCell } from './DatatableHeadCell';
import { DatatableRow } from './DatatableRow';
import { Table, TableProps } from '../Table';
import { TableBody } from '../TableBody';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { DatatableColumns } from '../types/DatatableColumns';
import { DatatableColumnOptions } from '../types/DatatableColumnOptions';

export interface DatatableProps<T extends DatatableColumns> extends TableProps {
  columnOptions: DatatableColumnOptions<T>;
  data: T[];
  innerRef?: React.Ref<HTMLTableElement>;
  onChangeSort?: (column: keyof T, sort: 'ascending' | 'descending') => void;
  sort?: {
    column: keyof T;
    direction: 'ascending' | 'descending';
  };
}

/*
 * NB: To workaround Typescript not forwarding generics in higher order
 * functions, we've had to resort to using normal FCs here...
 *
 * TODO: Can we standardise this somehow?
 */
export function Datatable<T extends DatatableColumns>(
  props: DatatableProps<T>,
) {
  const { columnOptions, data, innerRef, onChangeSort, sort, ...other } = props;

  return (
    <Table {...other} ref={innerRef}>
      <TableHead>
        <TableRow>
          {Object.keys(columnOptions)
            .filter(columnName => !columnOptions[columnName]?.hide)
            .map(columnName => (
              <DatatableHeadCell
                align={columnOptions[columnName]?.align}
                allowSort={columnOptions[columnName]?.sort}
                column={columnName}
                key={columnName}
                onChangeSort={sort => onChangeSort?.(columnName, sort)}
                sort={sort?.column === columnName ? sort?.direction : undefined}
              />
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
}
