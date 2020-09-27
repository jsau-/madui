import defaultsDeep from 'lodash/defaultsDeep';
import { lightTheme } from '../lightTheme';
import { Theme } from '../types/Theme';

export const darkTheme: Theme = defaultsDeep(
  {},
  {
    palette: {
      background: '#2A2A2A',
      divider: 'rgba(255,255,255,0.12)',
      text: '#FDFDFD',
    },
  },
  lightTheme,
);
