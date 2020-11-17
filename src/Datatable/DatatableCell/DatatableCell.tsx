import React from 'react';
import { DatatableCellData } from '../../types/DatatableCellData';
import { TableCell, TableCellProps } from '../../TableCell';

export interface DatatableCellProps<T extends DatatableCellData>
  extends TableCellProps {
  customRenderer?: (data: T) => React.ReactNode;
  data: T;
  false?: React.ReactNode;
  innerRef?: React.Ref<HTMLTableCellElement>;
  true?: React.ReactNode;
}

/*
 * NB: To workaround Typescript not forwarding generics in higher order
 * functions, we've had to resort to using normal FCs here...
 *
 * TODO: Can we standardise this somehow?
 */
export function DatatableCell<T extends DatatableCellData>(
  props: DatatableCellProps<T>,
) {
  const {
    customRenderer,
    data,
    false: defaultFalse,
    innerRef,
    true: defaultTrue,
    ...other
  } = props;

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
    <TableCell {...other} ref={innerRef}>
      {children}
    </TableCell>
  );
}
