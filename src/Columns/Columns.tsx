import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Columns.styles';

export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
}

export const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  function Columns(
    props: ColumnsProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const styles = useStyles();

    const { classes, ...other } = props;

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  },
);
