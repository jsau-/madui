import { useContext } from 'react';
import { PageContext } from '../PageContext';

/**
 * Gets page context.
 */
export const usePage = () => useContext(PageContext);
