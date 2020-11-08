import { useEffect, useState } from 'react';
import { aboveWidth } from '../styles/breakpoint/aboveWidth';
import { belowWidth } from '../styles/breakpoint/belowWidth';
import { Breakpoint } from '../types/Breakpoint';
import { useMediaQuery } from '../useMediaQuery';
import { useTheme } from '../useTheme';

/**
 * Gets the current breakpoint for the viewport. Useful to conditionally
 * apply styles to components, eg. changing padding on elements.
 */
export const useCurrentBreakpoint = (): Breakpoint => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');

  const theme = useTheme();

  const matches: Record<Breakpoint, boolean> = {
    lg: useMediaQuery(belowWidth(theme.breakpoints.xl)),
    md: useMediaQuery(belowWidth(theme.breakpoints.lg)),
    sm: useMediaQuery(belowWidth(theme.breakpoints.md)),
    xl: useMediaQuery(belowWidth(theme.breakpoints.xxl)),
    xs: useMediaQuery(belowWidth(theme.breakpoints.sm)),
    xxl: useMediaQuery(aboveWidth(theme.breakpoints.xl)),
  };

  useEffect(() => {
    let largestMatch: Breakpoint = 'xs';

    if (matches.xxl) largestMatch = 'xxl';
    if (matches.xl) largestMatch = 'xl';
    if (matches.lg) largestMatch = 'lg';
    if (matches.md) largestMatch = 'md';
    if (matches.sm) largestMatch = 'sm';

    setCurrentBreakpoint(largestMatch);
  }, [matches]);

  return currentBreakpoint;
};
