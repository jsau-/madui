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

  const handleWindowResize = () => {
    setWindowSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize;
};
