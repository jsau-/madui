import { Theme } from '../../types/Theme';

export const lightTheme: Theme = {
  background: '#fffeff',
  border: {
    radius: 16,
  },
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 800,
    lg: 1024,
    xl: 1920,
    xxl: 2560,
  },
  disabled: {
    opacity: 0.3,
  },
  overrides: {},
  palette: {
    error: {
      0: '#f9e7e7',
      100: '#f1c2c2',
      200: '#e89a9a',
      300: '#de7272',
      400: '#d75353',
      500: '#d03535',
      600: '#cb3030',
      700: '#c42828',
      800: '#be2222',
      900: '#b31616',
      contrastLight: '#FAFAFA',
      contrastDark: '#593939',
      contrasts: {
        0: 'dark',
        100: 'dark',
        200: 'dark',
        300: 'dark',
        400: 'light',
        500: 'light',
        600: 'light',
        700: 'light',
        800: 'light',
        900: 'light',
      },
    },
    warning: {
      0: '#fff8e1',
      100: '#ffecb5',
      200: '#ffe083',
      300: '#ffd451',
      400: '#ffca2c',
      500: '#ffc107',
      600: '#ffbb06',
      700: '#ffb305',
      800: '#ffab04',
      900: '#ff9e02',
      contrastLight: '#FAFAFA',
      contrastDark: '#595739',
      contrasts: {
        0: 'dark',
        100: 'dark',
        200: 'dark',
        300: 'dark',
        400: 'dark',
        500: 'dark',
        600: 'dark',
        700: 'dark',
        800: 'dark',
        900: 'dark',
      },
    },
    success: {
      0: '#e7f9e8',
      100: '#c2f1c6',
      200: '#9ae8a0',
      300: '#72de79',
      400: '#53d75d',
      500: '#35d040',
      600: '#30cb3a',
      700: '#28c432',
      800: '#22be2a',
      900: '#16b31c',
      contrastLight: '#FAFAFA',
      contrastDark: '#39593a',
      contrasts: {
        0: 'dark',
        100: 'dark',
        200: 'dark',
        300: 'dark',
        400: 'dark',
        500: 'dark',
        600: 'dark',
        700: 'dark',
        800: 'light',
        900: 'light',
      },
    },
    grey: {
      0: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      contrastLight: '#FAFAFA',
      contrastDark: '#201f21',
      contrasts: {
        0: 'light',
        100: 'light',
        200: 'light',
        300: 'light',
        400: 'dark',
        500: 'dark',
        600: 'dark',
        700: 'dark',
        800: 'dark',
        900: 'dark',
      },
    },
    primary: {
      0: '#eee7f9',
      100: '#d4c2f1',
      200: '#b79ae8',
      300: '#9a72de',
      400: '#8453d7',
      500: '#6e35d0',
      600: '#6630cb',
      700: '#5b28c4',
      800: '#5122be',
      900: '#3f16b3',
      contrastLight: '#FAFAFA',
      contrastDark: '#4e3959',
      contrasts: {
        0: 'dark',
        100: 'dark',
        200: 'dark',
        300: 'dark',
        400: 'light',
        500: 'light',
        600: 'light',
        700: 'light',
        800: 'light',
        900: 'light',
      },
    },
  },
  shadows: {
    none: '0',
    low: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    high: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
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
    durations: {
      short: 0.1,
      medium: 0.3,
      long: 0.8,
    },
  },
  zIndex: {
    drawer: 1000,
    modal: 1100,
    toast: 1200,
  },
};
