import { useMediaQuery } from '../useMediaQuery';
import { aboveWidth } from '../styles/breakpoint/aboveWidth';
import { Breakpoint } from '../types/Breakpoint';
import { Theme } from '../types/Theme';

export const useAboveBreakpoint = (breakpoint: Breakpoint) =>
  useMediaQuery((theme: Theme) => aboveWidth(theme.breakpoints[breakpoint]));
