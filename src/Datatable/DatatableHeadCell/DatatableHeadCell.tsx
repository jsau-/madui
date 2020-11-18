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

interface DatatableHeadCellProps extends TableHeadCellProps {
  allowSort?: boolean;
  column: string;
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
  const { allowSort, column, onChangeSort, sort, ...other } = props;

  const styles = useStyles();

  return (
    <TableHeadCell
      {...other}
      onClick={
        allowSort ? () => onChangeSort?.(getAlternatedSort(sort)) : undefined
      }
      ref={forwardedRef}
    >
      {column}
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
