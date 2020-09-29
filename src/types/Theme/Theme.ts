import { Breakpoint } from '../Breakpoint';
import { Elevation } from '../Elevation';

interface ThemeRecord {
  [key: string]:
    | string
    | number
    | boolean
    | bigint
    | ThemeRecord
    | Record<string, ThemeRecord>;
}

type Breakpoints = { [breakpoint in Breakpoint]: number } & ThemeRecord;

interface PaletteColor extends ThemeRecord {
  contrast: string;
  main: string;
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
  breakpoints: Breakpoints;
  overrides: Record<string, ThemeRecord>;
  palette: {
    background: string;
    divider: string;
    primary: PaletteColor;
    secondary: PaletteColor;
    text: string;
  };
  shadows: { [elevation in Elevation]: string } & ThemeRecord;
  spacing: {
    unit: number;
  };
  text: {
    body: {
      fontSize: number;
    };
    caption: {
      fontSize: number;
    };
    heading: {
      fontSize: number;
    };
    fontFamily: string;
    monoFontFamily: string;
    subheading: {
      fontSize: number;
    };
  };
  transitions: {
    duration: number;
  };
}
