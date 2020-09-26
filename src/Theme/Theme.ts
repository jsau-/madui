interface ThemeRecord {
  [key: string]: string | number | ThemeRecord;
}

interface PaletteColor extends ThemeRecord {
  constrast: string;
  main: string;
}

interface ThemePalette extends ThemeRecord {
  primary: PaletteColor;
  secondary: PaletteColor;
}

interface ThemeText extends ThemeRecord {
  [key: string]: string | number;
  fontFamily: string;
}

export interface Theme extends ThemeRecord {
  palette: ThemePalette;
  text: ThemeText;
}
