import { RefObject, useEffect, useState } from 'react';
import { Point2 } from 'src/types/Point2';
import { AnchorPoint } from '../types/AnchorPoint';
import { useMousePosition } from '../useMousePosition';
import { useWindowSize } from '../useWindowSize';
import { isPointWithinTriangle } from '../utils/isPointWithinTriangle';

const allAnchorPoints: AnchorPoint[] = [
  { x: 'left', y: 'top' },
  { x: 'left', y: 'bottom' },
  { x: 'right', y: 'top' },
  { x: 'right', y: 'bottom' },
];

/**
 * Is the mouse in a position between two DOM elements?
 *
 * @param mousePosition Current mouse position.
 * @param source Ref to source element.
 * @param target Ref to target element.
 */
const isMouseBetweenElements = (
  mousePosition: Point2,
  source: RefObject<HTMLElement>,
  target: RefObject<HTMLElement>,
) => {
  if (!source.current || !target.current) {
    return false;
  }

  const sourceBoundingRect = source.current.getBoundingClientRect();
  const targetBoundingRect = target.current.getBoundingClientRect();

  /*
   * This is pretty naive, and could absolutely be improved by some combination
   * of:
   * - Doing a bounding box check across both bounding areas first, to rule out
   *   definite negatives earlier. (Since we're only calling this function if
   *   we just _were_ in a valid hover area, I don't think we'll save _too
   *   much_ time there)
   * - Actually generating a convex hull to bound the rectangles, and splitting
   *   into relevant triangles.
   * - Generating a lookup table of known triangles to check depending on the
   *   relative positions of the bounding rects. See
   *   https://i.stack.imgur.com/9X0zq.png; https://stackoverflow.com/a/28232890
   *
   * Generally speaking the problems we're trying to solve here are:
   * - Convex hull generation around two rectangles
   * - Point-in-poly checks
   *
   * By generating a set of triangles bounding all points on the source and
   * target element we can naively generate a convex hull bounding them. We
   * might have to come back to this to optimise it in the future, but right now
   * this seems performant enough.
   */
  for (const sourceAnchor of allAnchorPoints) {
    for (const targetAnchorOne of allAnchorPoints) {
      for (const targetAnchorTwo of allAnchorPoints) {
        /*
         * No point checking against identical target points - would just be a
         * line and the check would fail every time!
         */
        if (
          targetAnchorOne.x === targetAnchorTwo.x &&
          targetAnchorOne.y === targetAnchorTwo.y
        ) {
          continue;
        }

        if (
          isPointWithinTriangle(
            mousePosition,
            {
              x: sourceBoundingRect[sourceAnchor.x],
              y: sourceBoundingRect[sourceAnchor.y],
            },
            {
              x: targetBoundingRect[targetAnchorOne.x],
              y: targetBoundingRect[targetAnchorOne.y],
            },
            {
              x: targetBoundingRect[targetAnchorTwo.x],
              y: targetBoundingRect[targetAnchorTwo.y],
            },
          )
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * Gets whether the mouse is currently hovering either on one of two DOM
 * elements, or in the area bound between them. Useful in implementing
 * behaviour like `jquery-menu-aim`, allowing users to move between two DOM
 * elements without losing their state of hovering.
 *
 * @example
 * ```javascript
 * const MyComponent = () => {
 *   const refOne = useRef(null);
 *   const refTwo = useRef(null);
 *
 *   const isHovering = useHoverWithAim(refOne, refTwo);
 *
 *   return (
 *     <div>
 *       <MenuButton ref={refOne} />
 *       <Menu open={isHovering} ref={refTwo}>
 *         <MenuItem>One</MenuItem>
 *         <MenuItem>Two</MenuItem>
 *       </Menu>
 *     </div>
 *   );
 * }
 * ```
 *
 * @param source - The source element.
 * @param target - The target element.
 */
export const useHoverWithAim = (
  source: RefObject<HTMLElement>,
  target: RefObject<HTMLElement>,
) => {
  const [hoveringAnywhereRelevant, setHoveringAnywhereRelevant] = useState(
    false,
  );
  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();

  useEffect(() => {
    const hoveringSource = source?.current?.matches(':hover') || false;
    const hoveringTarget = target?.current?.matches(':hover') || false;

    /*
     * If we're hovering on either element directly, we can save ourselves an
     * expensive set of checks on if we're between them.
     */
    if (hoveringSource || hoveringTarget) {
      setHoveringAnywhereRelevant(true);
      return;
    }

    /*
     * We only care about checking between the elements if we were previously
     * in a state of caring (eg. we've moused into the source element).
     */
    if (hoveringAnywhereRelevant) {
      setHoveringAnywhereRelevant(
        isMouseBetweenElements(mousePosition, source, target),
      );
      return;
    }

    setHoveringAnywhereRelevant(false);
  }, [
    source,
    source?.current?.getBoundingClientRect(),
    target,
    target?.current?.getBoundingClientRect(),
    mousePosition,
    windowSize,
    hoveringAnywhereRelevant,
  ]);

  return hoveringAnywhereRelevant;
};
