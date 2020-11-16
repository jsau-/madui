import clsx from 'clsx';
import React from 'react';
import { useStyles } from './DatatableRow.styles';
import { DatatableCell } from '../DatatableCell';
import { DatatableColumns } from '../../types/DatatableColumns';
import { DatatableCellData } from '../../types/DatatableCellData';
import { DatatableColumnOptions } from '../../types/DatatableColumnOptions';

export interface DatatableRowProps<T = DatatableColumns>
  extends React.HTMLAttributes<HTMLTableRowElement> {
  classes?: Record<string, string>;
  columns: DatatableColumnOptions<T>;
  data: T;
}

export const DatatableRow = React.forwardRef<
  HTMLTableRowElement,
  DatatableRowProps<Record<string, DatatableCellData>>
>(function DatatableRow<T = DatatableColumns>(
  props: DatatableRowProps<T>,
  forwardedRef: React.Ref<HTMLTableRowElement>,
) {
  const { classes, columns, data, ...other } = props;

  const styles = useStyles();

  const columnCells: React.ReactNode[] = [];

  /*
   * TODO: Type inference on the custom renderer seems a bit screwy.
   * Need to do some more work there.
   */
  for (const columnName in data) {
    const cellData = (data[columnName] as unknown) as DatatableCellData;

    const customRenderer = (columns[columnName]?.customRenderer as unknown) as (
      data: DatatableCellData,
    ) => React.ReactNode;

    if (!columns[columnName]?.hide) {
      columnCells.push(
        <DatatableCell
          customRenderer={customRenderer}
          data={cellData}
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
