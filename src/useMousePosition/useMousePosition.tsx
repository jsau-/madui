import { useEffect, useState } from 'react';
import { Point2 } from '../types/Point2';

/**
 * Gets the current mouse position.
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Point2>({
    x: 0,
    y: 0,
  });

  const setMousePositionFromMouseEvent = (mouseEvent: MouseEvent): void => {
    setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', setMousePositionFromMouseEvent);

    return (): void => {
      window.removeEventListener('mousemove', setMousePositionFromMouseEvent);
    };
  }, []);

  return mousePosition;
};
