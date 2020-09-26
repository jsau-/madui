interface ThemeRecord {
  [key: string]: string | number | ThemeRecord;
}

interface PaletteColor extends ThemeRecord {
  constrast: string;
  main: string;
}

export interface Theme extends ThemeRecord {
  palette: {
    primary: PaletteColor;
    secondary: PaletteColor;
  };
  text: {
    body: {
      fontSize: number;
    };
    caption: {
      fontSize: number;
    };
    color: string;
    heading: {
      fontSize: number;
    };
    fontFamily: string;
    subheading: {
      fontSize: number;
    };
  };
}
