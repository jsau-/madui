import { DatatableColumns } from '../DatatableColumns';

export type DatatableColumnOptions<T = DatatableColumns> = {
  [P in keyof T]: {
    customRenderer?: (data: T[P]) => React.ReactNode;
    hide?: boolean;
  };
};
