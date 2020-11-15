import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Column.styles';
import { Breakpoint } from '../types/Breakpoint';

type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type BreakpointColumnWidthMap = { [breakpoint in Breakpoint]: ColumnWidth };

export interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BreakpointColumnWidthMap {
  classes?: Record<string, string>;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  function Column(props: ColumnProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { classes, lg, md, sm, xl, xs, xxl, ...other } = props;

    const styles = useStyles();

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      />
    );
  },
);
