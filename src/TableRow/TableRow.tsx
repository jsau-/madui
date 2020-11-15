import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableRow.styles';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  classes?: Record<string, string>;
}

export const TableRow = React.forwardRef<HTMLTableRowElement>(function TableRow(
  props: TableRowProps,
  forwardedRef: React.Ref<HTMLTableRowElement>,
) {
  const { classes, ...other } = props;

  const styles = useStyles();

  return (
    <tr
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {props.children}
    </tr>
  );
});
