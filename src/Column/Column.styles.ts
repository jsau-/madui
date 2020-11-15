import { makeStyles } from '../styles/makeStyles';
import { ColumnWidth } from '../types/ColumnWidth';

const columnWidthStyles = (columnWidth: ColumnWidth) => ({
  flexBasis: `${(columnWidth / 12) * 100.0}%`,
});

export const useStyles = makeStyles(
  () => ({
    1: columnWidthStyles(1),
    2: columnWidthStyles(2),
    3: columnWidthStyles(3),
    4: columnWidthStyles(4),
    5: columnWidthStyles(5),
    6: columnWidthStyles(6),
    7: columnWidthStyles(7),
    8: columnWidthStyles(8),
    9: columnWidthStyles(9),
    10: columnWidthStyles(10),
    11: columnWidthStyles(11),
    12: columnWidthStyles(12),
    root: {},
  }),
  'Column',
);
