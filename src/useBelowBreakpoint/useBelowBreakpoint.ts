import { useMediaQuery } from '../useMediaQuery';
import { belowWidth } from '../styles/breakpoint/belowWidth';
import { Breakpoint } from '../types/Breakpoint';
import { Theme } from '../types/Theme';

export const useBelowBreakpoint = (breakpoint: Breakpoint): boolean =>
  useMediaQuery((theme: Theme) => belowWidth(theme.breakpoints[breakpoint]));
