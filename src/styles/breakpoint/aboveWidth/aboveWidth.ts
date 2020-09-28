import { DisplayUnit } from '../../../types/DisplayUnit';

/**
 * Generate a media query for above a given width.
 *
 * @param width The width above which the media query should trigger.
 * @param unit The display unit to use (eg. "px", "vw")
 */
export const aboveWidth = (width: number, unit: DisplayUnit = 'px') => {
  return `@media (min-width: ${width}${unit})`;
};
