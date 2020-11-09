/**
 * Clamp a number between two values.
 *
 * @param value Value to clamp.
 * @param min Minimum possible value.
 * @param max Maximum possible value.
 */
export const clamp = (value: number, min: number, max: number) => {
  if (value > max) {
    return max;
  }

  if (value < min) {
    return min;
  }

  return value;
};
