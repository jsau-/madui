/**
 * Recursively re-define an existing type s.t. every field within it is
 * optional. Useful when providing an optional subset of a known type which is
 * merged with defaults, eg. when creating themes.
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
