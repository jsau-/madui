interface PaletteColor {
  constrast: string;
  main: string;
}

interface ThemePalette {
  primary: PaletteColor;
  secondary: PaletteColor;
}

interface ThemeText {
  fontFamily: string;
}

export interface Theme {
  palette: ThemePalette;
  text: ThemeText;
}
