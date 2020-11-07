import { RefObject, useEffect, useState } from 'react';
import { AnchorPoint } from '../types/AnchorPoint';
import { useMousePosition } from '../useMousePosition';
import { useWindowSize } from '../useWindowSize';
import { getAnchorPointFromHTMLElement } from '../utils/getAnchorPointFromHTMLElement';
import { isPointWithinTriangle } from '../utils/isPointWithinTriangle';

/**
 * Gets whether the mouse is currently hovering either on one of two DOM
 * elements, or in the area bound between them. Useful in implementing
 * behaviour like `jquery-menu-aim`.
 *
 * @param source - The source element.
 * @param target - The target element.
 */
export const useHoverWithAim = (
  source: RefObject<HTMLElement>,
  target: RefObject<HTMLElement>,
  sourceAnchor: AnchorPoint,
  targetAnchorOne: AnchorPoint,
  targetAnchorTwo: AnchorPoint,
): boolean => {
  const [hoveringAnywhereRelevant, setHoveringAnywhereRelevant] = useState(false);

  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();

  useEffect(() => {
    const hoveringSource = source?.current?.matches(':hover') || false;
    const hoveringTarget = target?.current?.matches(':hover') || false;

    let isWithinTriangleBetweenElements = false;

    /*
     * We can only determine if we're within the aim area if we have a pair
     * of DOM elements.
     */
    if (hoveringAnywhereRelevant && source.current && target.current) {
      isWithinTriangleBetweenElements = isPointWithinTriangle(
        mousePosition,
        getAnchorPointFromHTMLElement(source.current, sourceAnchor),
        getAnchorPointFromHTMLElement(target.current, targetAnchorOne),
        getAnchorPointFromHTMLElement(target.current, targetAnchorTwo),
      );
    }

    setHoveringAnywhereRelevant(hoveringSource || hoveringTarget || isWithinTriangleBetweenElements);
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
}
