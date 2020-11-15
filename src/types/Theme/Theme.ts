import { Breakpoint } from '../Breakpoint';
import { Color } from '../Color';
import { Elevation } from '../Elevation';
import { TextVariant } from '../TextVariant';

interface ThemeRecord {
  [key: string]:
    | string
    | number
    | boolean
    | bigint
    | ThemeRecord
    | Record<string, ThemeRecord>;
}

interface Palette extends ThemeRecord {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Themes are used to style components within the library.
 *
 * Note that only defined primitives are allowed as theme fields. The intent is
 * to ensure that themes are kept simple, pure, and serializable to allow
 * transfer (eg. loading a user theme over HTTP).
 *
 * All components defined in the library can be overriden by setting styles in
 * the overrides section of the theme. See individual component style files for
 * classes to target. Overrides are merged with higher priority than base
 * styles.
 */
export interface Theme extends ThemeRecord {
  border: {
    radius: number;
  };
  breakpoints: { [breakpoint in Breakpoint]: number } & ThemeRecord;
  overrides: Record<string, ThemeRecord>;
  palette: {
    [color in Color]: Palette;
  };
  shadows: { [elevation in Elevation]: string } & ThemeRecord;
  spacing: {
    unit: number;
  };
  text: {
    fontFamily: string;
    monoFontFamily: string;
    sizes: Record<TextVariant, number> & ThemeRecord;
  };
  transitions: {
    duration: number;
  };
}
