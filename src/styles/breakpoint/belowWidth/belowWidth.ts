import { DisplayUnit } from '../../../types/DisplayUnit';

/**
 * Generate a media query for below a given width.
 *
 * @param width The width below which the media query should trigger.
 * @param unit The display unit to use (eg. "px", "vw")
 * @param allowNegative Should the query allow negative widths? Note that this
 * will effectively become a "not" query in that case.
 */
export const belowWidth = (width: number, unit: DisplayUnit = 'px', allowNegative: boolean = false) => {
  let queryWidth = width - 1;

  if (!allowNegative && queryWidth < 0) {
    queryWidth = 0;
  }

  return `@media (max-width: ${queryWidth}${unit})`;
}
