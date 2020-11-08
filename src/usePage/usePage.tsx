import { useContext } from 'react';
import { PageContext, PageContextInterface } from '../PageContext';

/**
 * Gets page context.
 */
export const usePage = (): PageContextInterface => useContext(PageContext);
