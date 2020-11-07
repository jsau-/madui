import { useEffect, useState } from 'react';
import { Point2 } from '../types/Point2';

/**
 * Gets the current window size.
 */
export const useWindowSize = (): Point2 => {
  const [windowSize, setWindowSize] = useState({
    x: 0,
    y: 0,
  });

  const hasWindow = 'undefined' !== typeof window;

  const handleWindowResize = (): void => {
    setWindowSize({
      x: hasWindow ? window.innerWidth : 0,
      y: hasWindow ? window.innerHeight : 0,
    });
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleWindowResize);
    }

    return (): void => {
      if (hasWindow) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, [hasWindow]);

  return windowSize;
};
