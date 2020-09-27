interface ThemeRecord {
  [key: string]: string | number | ThemeRecord;
}

interface PaletteColor extends ThemeRecord {
  constrast: string;
  main: string;
}

export interface Theme {
  border: {
    radius: number;
  };
  overrides?: Record<string, ThemeRecord>;
  palette: {
    background: string;
    divider: string;
    primary: PaletteColor;
    secondary: PaletteColor;
    text: string;
  };
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
}
