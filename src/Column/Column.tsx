import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Column.styles';
import { Breakpoint } from '../types/Breakpoint';
import { ColumnWidth } from '../types/ColumnWidth';
import { useAboveBreakpoint } from '../useAboveBreakpoint';

type BreakpointColumnWidthMap = { [breakpoint in Breakpoint]?: ColumnWidth };

export interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BreakpointColumnWidthMap {
  classes?: Record<string, string>;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  function Column(props: ColumnProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { classes, xs, sm, md, lg, xl, xxl, ...other } = props;

    const styles = useStyles();

    const matchesBreakpoint: Record<Breakpoint, boolean> = {
      xs: true,
      sm: useAboveBreakpoint('xs'),
      md: useAboveBreakpoint('sm'),
      lg: useAboveBreakpoint('md'),
      xl: useAboveBreakpoint('lg'),
      xxl: useAboveBreakpoint('xl'),
    };

    let columnWidth = 12;

    if (matchesBreakpoint.xs && xs) columnWidth = xs;
    if (matchesBreakpoint.sm && sm) columnWidth = sm;
    if (matchesBreakpoint.md && md) columnWidth = md;
    if (matchesBreakpoint.lg && lg) columnWidth = lg;
    if (matchesBreakpoint.xl && xl) columnWidth = xl;
    if (matchesBreakpoint.xxl && xxl) columnWidth = xxl;

    return (
      <div
        {...other}
        className={clsx(
          styles.root,
          styles[columnWidth],
          classes?.root,
          classes?.[columnWidth],
          props?.className,
        )}
        ref={forwardedRef}
      />
    );
  },
);
