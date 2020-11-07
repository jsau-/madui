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
): boolean => {
  if (!source.current || !target.current) {
    return false;
  }

  const sourceBoundingRect = source.current.getBoundingClientRect();
  const targetBoundingRect = target.current.getBoundingClientRect();

  /*
   * By checking all permutations of the triangles between the source and
   * target element, we can effectively check all space between the two DOM
   * elements.
   *
   * This is kinda expensive, and if it seems like a performance bottleneck we
   * could do a naive bounding box check against both elements. (I don't think
   * that would be a huge saving though, since we should only be calling this
   * after we've started hovering in either element...)
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
 * @example javascript```
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
): boolean => {
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
