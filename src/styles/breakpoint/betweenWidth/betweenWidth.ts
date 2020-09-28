import { DisplayUnit } from '../../../types/DisplayUnit';

/**
 * Generate a media query for between two widths.
 *
 * @param min The minimum width for which the media query should trigger.
 * @param max The maximum width for which the media query should trigger.
 * @param unit The display unit to use (eg. "px", "vw")
 */
export const betweenWidth = (
  min: number,
  max: number,
  unit: DisplayUnit = 'px',
): string => {
  return `@media (min-width: ${min}${unit}) and (max-width: ${max}${unit})`;
};
