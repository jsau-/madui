import { useContext } from 'react';
import { PageContext } from '../PageProvider/PageContext';

/**
 * Gets page context.
 */
export const usePage = () => useContext(PageContext);
