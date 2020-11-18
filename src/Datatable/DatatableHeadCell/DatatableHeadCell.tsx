import React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { useStyles } from './DatatableHeadCell.styles';
import { Icon } from '../../Icon';
import { TableHeadCell, TableHeadCellProps } from '../../TableHeadCell';

const getAlternatedSort = (
  sort: 'ascending' | 'descending' | undefined,
): 'ascending' | 'descending' => {
  if (!sort) {
    return 'ascending';
  }

  if ('ascending' === sort) {
    return 'descending';
  }

  return 'ascending';
};

export interface DatatableHeadCellProps extends TableHeadCellProps {
  onChangeSort?: (sort: 'ascending' | 'descending') => void;
  sort?: 'ascending' | 'descending';
}

export const DatatableHeadCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  DatatableHeadCellProps
>(function DatatableHeadCell(
  props: DatatableHeadCellProps,
  forwardedRef: React.Ref<HTMLTableHeaderCellElement>,
) {
  const { onChangeSort, sort, ...other } = props;

  const styles = useStyles();

  return (
    <TableHeadCell
      {...other}
      onClick={
        onChangeSort ? () => onChangeSort?.(getAlternatedSort(sort)) : undefined
      }
      ref={forwardedRef}
    >
      {props.children}
      {'ascending' === sort && (
        <Icon className={styles.sorticon} height={16} width={16}>
          <ArrowDown />
        </Icon>
      )}
      {'descending' === sort && (
        <Icon className={styles.sorticon} height={16} width={16}>
          <ArrowUp />
        </Icon>
      )}
    </TableHeadCell>
  );
});
