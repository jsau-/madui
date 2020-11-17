import { DatatableColumns } from '../DatatableColumns';

export type DatatableColumnOptions<T extends DatatableColumns> = {
  [P in keyof T]: {
    align?: 'left' | 'center' | 'right';
    customRenderer?: (data: T[P]) => React.ReactNode;
    hide?: boolean;
  };
};
