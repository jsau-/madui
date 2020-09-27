import { Elevation } from '../Elevation';

interface ThemeRecord {
  [key: string]: string | number | ThemeRecord | Record<string, ThemeRecord>;
}

interface PaletteColor extends ThemeRecord {
  contrast: string;
  main: string;
}

export interface Theme extends ThemeRecord {
  border: {
    radius: number;
  };
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
