import { isSSR } from '../isSSR';

/**
 * Get the document body if available, or null in the case it isn't (i.e. we're
 * in first render on the server)
 */
export const getDocumentBody = () => (isSSR() ? null : document.body);
