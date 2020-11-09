import { Point2 } from '../../types/Point2';

/**
 * Calculates if a given point is within a triangle using Barycentric
 * co-ordinates. Inspiration taken from the linked StackOverflow answer.
 *
 * @see https://stackoverflow.com/a/13301035
 * @author https://stackoverflow.com/users/1189069/kevintodisco
 * @date 2020-11-07
 *
 * @param point Point to check if within the given triangle.
 * @param triPointOne Co-ordinate pair of first corner of triangle to check.
 * @param triPointTwo Co-ordinate pair of second corner of triangle to check.
 * @param triPointThree Co-ordinate pair of third corner of triangle to check.
 */
export const isPointWithinTriangle = (
  point: Point2,
  triPointOne: Point2,
  triPointTwo: Point2,
  triPointThree: Point2,
) => {
  const alpha =
    ((triPointTwo.y - triPointThree.y) * (point.x - triPointThree.x) +
      (triPointThree.x - triPointTwo.x) * (point.y - triPointThree.y)) /
    ((triPointTwo.y - triPointThree.y) * (triPointOne.x - triPointThree.x) +
      (triPointThree.x - triPointTwo.x) * (triPointOne.y - triPointThree.y));

  const beta =
    ((triPointThree.y - triPointOne.y) * (point.x - triPointThree.x) +
      (triPointOne.x - triPointThree.x) * (point.y - triPointThree.y)) /
    ((triPointTwo.y - triPointThree.y) * (triPointOne.x - triPointThree.x) +
      (triPointThree.x - triPointTwo.x) * (triPointOne.y - triPointThree.y));

  const gamma = 1.0 - alpha - beta;

  return 0 < alpha && 0 < beta && 0 < gamma;
};
