import clsx from 'clsx';
import React from 'react';
import { useStyles } from './TableBody.styles';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  classes?: Record<string, string>;
}

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(function TableBody(
  props: TableBodyProps,
  forwardedRef: React.Ref<HTMLTableSectionElement>,
) {
  const { classes, ...other } = props;

  const styles = useStyles();

  return (
    <tbody
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {props.children}
    </tbody>
  );
});
