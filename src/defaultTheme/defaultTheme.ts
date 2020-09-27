import { Theme } from '../types/Theme/Theme';

export const defaultTheme: Theme = {
  border: {
    radius: 4,
  },
  palette: {
    divider: 'rgba(0, 0, 0, 0.1)',
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
    color: '#1D1E2C',
    fontFamily: 'Epilogue, Roboto, sans-serif',
    heading: {
      fontSize: 48,
    },
    monoFontFamily: 'Source Code Pro, monospace',
    subheading: {
      fontSize: 32,
    },
  },
};
