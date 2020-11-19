import { useEffect, useState } from 'react';
import { useTheme } from '../useTheme';
import { Theme } from '../types/Theme';

type MatchMedia = (query: string) => MediaQueryList;

/**
 * Get whether we currently match a given media query. Useful for rendering
 * different layouts or classes according to the current viewport.
 *
 * @param query Media query to check against. Note that we allow either
 * passing in a media query directly - eg. if created by a function in
 * `src/styles/breakpoint` - or a function to generate breakpoint from the theme
 *  - eg. if we want to break on `theme.breakpoints.sm`
 * @param customMatchMedia Custom matchMedia function, eg. if using server-side
 * rendering.
 */
export const useMediaQuery = (
  query: string | ((theme: Theme) => string),
  customMatchMedia?: MatchMedia,
) => {
  let matchMedia: MatchMedia | undefined;

  let mediaQuery: string;

  if (typeof query === 'function') {
    const theme = useTheme();
    mediaQuery = query(theme);
  } else {
    mediaQuery = query;
  }

  mediaQuery = mediaQuery.replace(/@media/, '');

  if (customMatchMedia) {
    matchMedia = customMatchMedia;
  } else if (window && window.matchMedia) {
    matchMedia = window.matchMedia;
  }

  // Set our initial match state
  const [currentlyMatches, setCurrentlyMatches] = useState(() => {
    if (matchMedia) {
      return matchMedia(mediaQuery).matches;
    }

    return false;
  });

  useEffect(() => {
    /*
     * If we don't currently have any match available, there's nothing for us
     * to do right now
     */
    if (!matchMedia) {
      setCurrentlyMatches(false);
      return undefined;
    }

    const mediaQueryList = matchMedia(mediaQuery);

    const onChangeMatches = (): void => {
      setCurrentlyMatches(mediaQueryList.matches);
    };

    onChangeMatches();

    mediaQueryList.addEventListener('change', onChangeMatches);

    return (): void => {
      mediaQueryList.removeEventListener('change', onChangeMatches);
    };
  }, [matchMedia, mediaQuery]);

  return currentlyMatches;
};
