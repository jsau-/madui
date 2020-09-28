import { RecursivePartial } from 'src/types/RecursivePartial';
import { Theme } from '../../types/Theme';

export const darkTheme: RecursivePartial<Theme> = {
  palette: {
    background: '#2A2A2A',
    divider: 'rgba(255,255,255,0.12)',
    primary: {
      contrast: '#FDFDFD',
      dark: '#002171',
      light: '#5472D3',
      main: '#0D47A1',
    },
    secondary: {
      contrast: '#FDFDFD',
      dark: '#00251A',
      light: '#39796B',
      main: '#004D40',
    },
    text: '#FDFDFD',
  },
};
