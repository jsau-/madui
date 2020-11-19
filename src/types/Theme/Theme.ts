import { Breakpoint } from '../Breakpoint';
import { Color } from '../Color';
import { Elevation } from '../Elevation';
import { Palette } from '../Palette';
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
  background: string;
  border: {
    radius: number;
  };
  breakpoints: { [breakpoint in Breakpoint]: number } & ThemeRecord;
  disabled: {
    opacity: number;
  };
  overrides: Record<string, ThemeRecord>;
  palette: {
    [color in Color]: Palette & ThemeRecord;
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
    durations: {
      short: number;
      medium: number;
      long: number;
    };
  };
  zIndex: {
    drawer: number;
    modal: number;
    toast: number;
  };
}
