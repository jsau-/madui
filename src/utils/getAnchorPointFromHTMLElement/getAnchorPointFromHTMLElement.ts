import { AnchorPoint } from '../../types/AnchorPoint';
import { Point2 } from '../../types/Point2';

/**
 * Gets the co-ordinates of an anchor point for a given HTML element, eg. the
 * co-ordinates of the top-left corner of the element.
 *
 * @param htmlElement Element to get point from.
 * @param anchorPoint Which point to get.
 */
export const getAnchorPointFromHTMLElement = (htmlElement: HTMLElement, anchorPoint: AnchorPoint): Point2 => {
  const boundingRects = htmlElement.getBoundingClientRect();

  return {
    x: boundingRects[anchorPoint.x],
    y: boundingRects[anchorPoint.y],
  };
};
