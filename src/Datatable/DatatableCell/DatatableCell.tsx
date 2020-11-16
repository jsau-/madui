import clsx from 'clsx';
import React from 'react';
import { useStyles } from './DatatableCell.styles';
import { DatatableCellData } from '../../types/DatatableCellData';

export interface DatatableCellProps<T extends DatatableCellData>
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  classes?: Record<string, string>;
  customRenderer?: (data: T) => React.ReactNode;
  data: T;
  false?: React.ReactNode;
  true?: React.ReactNode;
}

export const DatatableCell = React.forwardRef<
  HTMLTableDataCellElement,
  DatatableCellProps<DatatableCellData>
>(function DatatableCell<T extends DatatableCellData>(
  props: DatatableCellProps<T>,
  forwardedRef: React.Ref<HTMLTableDataCellElement>,
) {
  const {
    classes,
    customRenderer,
    data,
    false: defaultFalse,
    true: defaultTrue,
    ...other
  } = props;

  const styles = useStyles();

  let children: React.ReactNode = data;

  if (customRenderer) {
    children = customRenderer(data);
  }

  /*
   * By default booleans won't render anything. If nothing is provided,
   * fallback to some sensible default. NB: We'll probably end up getting
   * these values from context going forward.
   */
  if ('boolean' === typeof children) {
    if (!children) {
      children = defaultFalse || 'False';
    } else {
      children = defaultTrue || 'True';
    }
  }

  return (
    <td
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {children}
    </td>
  );
});
