import { Theme } from '../types/Theme';

export const lightTheme: Theme = {
  border: {
    radius: 4,
  },
  overrides: {},
  palette: {
    background: '#FDFDFD',
    divider: 'rgba(0,0,0,0.12)',
    primary: {
      constrast: '#FFFFFF',
      dark: '#023E8A',
      light: '#00B4D8',
      main: '#0096C7',
    },
    secondary: {
      constrast: '#FFFFFF',
      dark: '#F25C54',
      light: '#F7B267',
      main: '#F4845F',
    },
    text: '#2A2A2A',
  },
  shadows: {
    high: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    low: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  spacing: {
    unit: 8,
  },
  text: {
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 10,
    },
    fontFamily: 'Epilogue, Roboto, sans-serif',
    heading: {
      fontSize: 48,
    },
    monoFontFamily: 'Source Code Pro, monospace',
    subheading: {
      fontSize: 32,
    },
  },
  transitions: {
    duration: 0.3,
  },
};
