import { Theme } from '../types/Theme/Theme';

export const defaultTheme: Theme = {
  palette: {
    primary: {
      constrast: '#FFFFFF',
      main: '#054A91',
    },
    secondary: {
      constrast: '#FFFFFF',
      main: '#F17300',
    },
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
    subheading: {
      fontSize: 32,
    },
  },
};
