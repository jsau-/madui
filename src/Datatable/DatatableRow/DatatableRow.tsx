import clsx from 'clsx';
import React from 'react';
import { useStyles } from './DatatableRow.styles';
import { DatatableCell } from '../DatatableCell';
import { DatatableCellData } from '../../types/DatatableCellData';

export interface DatatableRowProps<T extends Record<string, DatatableCellData>>
  extends React.HTMLAttributes<HTMLTableRowElement> {
  classes?: Record<string, string>;
  data: T;
}

export const DatatableRow = React.forwardRef<
  HTMLTableRowElement,
  DatatableRowProps<Record<string, DatatableCellData>>
>(function DatatableRow<T extends Record<string, DatatableCellData>>(
  props: DatatableRowProps<T>,
  forwardedRef: React.Ref<HTMLTableRowElement>,
) {
  const { classes, data, ...other } = props;

  const styles = useStyles();

  const columnCells = [];

  for (const columnName in data) {
    columnCells.push(
      <DatatableCell data={data[columnName]} key={columnName} />,
    );
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
