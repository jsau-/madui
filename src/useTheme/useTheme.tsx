import { useContext } from 'react';
import { Theme } from '../Theme';
import { ThemeContext } from '../ThemeProvider/ThemeContext';

export const useTheme = (): Theme => useContext(ThemeContext);
