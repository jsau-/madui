import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getDocumentBody } from '../utils/getDocumentBody';

export interface PortalProps {
  children?: React.ReactNode;
  container?: React.MutableRefObject<HTMLElement | null>;
}

export function Portal(props: PortalProps) {
  const { children, container } = props;

  const [parent, setParent] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setParent(container?.current || getDocumentBody());
  }, [container]);

  if (!parent) {
    return null;
  }

  return ReactDOM.createPortal(children, parent);
}
