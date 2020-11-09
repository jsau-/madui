import { Theme } from '../../types/Theme';

export const lightTheme: Theme = {
  border: {
    radius: 16,
  },
  breakpoints: {
    lg: 1024,
    md: 800,
    sm: 600,
    xl: 1920,
    xs: 0,
    xxl: 2560,
  },
  overrides: {},
  palette: {
    grey: {
      0: '#FAFBFF',
      100: '#F7F8FC',
      200: '#F3F4F8',
      300: '#ECEDF1',
      400: '#DEDFE3',
      500: '#C1C2C6',
      600: '#A5A6A9',
      700: '#88898C',
      800: '#6C6D70',
      900: '#161619',
    },
    primary: {
      0: '#D0E0F6',
      100: '#A8C6F1',
      200: '#7FACEB',
      300: '#5792E6',
      400: '#2E78E0',
      500: '#296CCA',
      600: '#245FB3',
      700: '#194685',
      800: '#0F2D58',
      900: '#04142A',
    },
  },
  shadows: {
    high: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    low: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    none: '0',
  },
  spacing: {
    unit: 8,
  },
  text: {
    fontFamily: 'Open Sans, Roboto, Helvetica, Arial, sans-serif',
    monoFontFamily: 'Source Code Pro, monospace',
    sizes: {
      body1: 16,
      body2: 14,
      caption: 12,
      h1: 72,
      h2: 58,
      h3: 46,
      h4: 36,
      h5: 30,
      h6: 24,
    },
  },
  transitions: {
    duration: 0.3,
  },
};
