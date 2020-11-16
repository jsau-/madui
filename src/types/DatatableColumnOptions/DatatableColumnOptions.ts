import { DatatableCellData } from '../DatatableCellData';
import { DatatableColumns } from '../DatatableColumns';

export type DatatableColumnOptions<T extends DatatableColumns> = {
  [P in keyof T]: {
    /*
     * NB: I'm pretty sure we _could_ be more explicit here and say
     * `(data: T[P]) => React.ReactNode` but I went down a rabbit-hole
     * of type errors that way.
     *
     * For future reference, being specific there gave us nice
     * type-hints about types when declaring this function, so if we
     * want to get that back we'll have to figure that out.
     */
    customRenderer?: (data: DatatableCellData) => React.ReactNode;
    hide?: boolean;
  };
};
