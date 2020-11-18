import React, { useMemo, useState } from 'react';
import { PageContext } from './PageContext';

interface PageProviderProps {
  children?: React.ReactNode;
  initialState?: {
    showFooter?: boolean;
    showNavbar?: boolean;
    showSidebar?: boolean;
  };
}

export const PageProvider = (props: PageProviderProps) => {
  const [showFooter, setShowFooter] = useState(
    props?.initialState?.showFooter || true,
  );
  const [showNavbar, setShowNavbar] = useState(
    props?.initialState?.showNavbar || true,
  );
  const [showSidebar, setShowSidebar] = useState(
    props?.initialState?.showSidebar || true,
  );

  const value = useMemo(
    () => ({
      footer: {
        close: (): void => setShowFooter(false),
        isOpen: showFooter,
        open: (): void => setShowFooter(true),
        toggle: (): void => setShowFooter(!showFooter),
      },
      navbar: {
        close: (): void => setShowNavbar(false),
        isOpen: showNavbar,
        open: (): void => setShowNavbar(true),
        toggle: (): void => setShowNavbar(!showNavbar),
      },
      sidebar: {
        close: (): void => setShowSidebar(false),
        isOpen: showSidebar,
        open: (): void => setShowSidebar(true),
        toggle: (): void => setShowSidebar(!showSidebar),
      },
    }),
    [showNavbar, showSidebar, showFooter],
  );

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
};
