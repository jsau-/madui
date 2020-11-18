import { createContext } from 'react';

export interface PageContextInterface {
  footer: {
    close: () => void;
    isOpen: boolean;
    open: () => void;
    toggle: () => void;
  };
  navbar: {
    close: () => void;
    isOpen: boolean;
    open: () => void;
    toggle: () => void;
  };
  sidebar: {
    close: () => void;
    isOpen: boolean;
    open: () => void;
    toggle: () => void;
  };
}

export const PageContext = createContext<PageContextInterface>({
  footer: {
    close: (): void => undefined,
    isOpen: true,
    open: (): void => undefined,
    toggle: (): void => undefined,
  },
  navbar: {
    close: (): void => undefined,
    isOpen: true,
    open: (): void => undefined,
    toggle: (): void => undefined,
  },
  sidebar: {
    close: (): void => undefined,
    isOpen: true,
    open: (): void => undefined,
    toggle: (): void => undefined,
  },
});
