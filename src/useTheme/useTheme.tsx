import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
