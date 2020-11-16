import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Datatable.styles';
import { DatatableRow } from '../DatatableRow';
import { DatatableColumns } from '../../types/DatatableColumns';
import { DatatableColumnOptions } from '../../types/DatatableColumnOptions';

export interface DatatableProps<T extends DatatableColumns> extends React.HTMLAttributes<HTMLTableElement> {
  classes?: Record<string, string>;
  columnOptions: DatatableColumnOptions<T>;
  data: T[];
};

export const Datatable = React.forwardRef<HTMLTableElement, DatatableProps<DatatableColumns>>(function Datatable<T extends DatatableColumns>(
  props: DatatableProps<T>,
  forwardedRef: React.Ref<HTMLTableElement>,
) {
  const { classes, columnOptions, data, ...other } = props;

  const styles = useStyles();

  return (
    <table
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      <tbody>
        {data.map(rowData => (
          <DatatableRow
            columnOptions={columnOptions}
            data={rowData}
          />
        ))}
      </tbody>
    </table>
  )
});
