import { useEffect, useState } from 'react';
import { Point2 } from '../types/Point2';
import { isSSR } from '../utils/isSSR';

/**
 * Gets the current window size.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Point2>({
    x: 0,
    y: 0,
  });

  const ssr = isSSR();

  const handleWindowResize = (): void => {
    setWindowSize({
      x: ssr ? 0 : window.innerWidth,
      y: ssr ? 0 : window.innerHeight,
    });
  };

  useEffect(() => {
    if (!ssr) {
      window.addEventListener('resize', handleWindowResize);

      // Set initial size
      handleWindowResize();
    }

    return (): void => {
      if (!ssr) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, [ssr]);

  return windowSize;
};
