import React from 'react';
import ReactDOM from 'react-dom';
import { getDocumentBody } from '../utils/getDocumentBody';

/**
 * TODO: Support containers other than document.body
 */
export interface PortalProps {
  children?: React.ReactNode;
}

export function Portal(props: PortalProps) {
  const { children } = props;

  const parent = getDocumentBody();

  if (!parent) {
    return null;
  }

  return ReactDOM.createPortal(children, parent);
}
