import React from 'react';
import { Toast } from '../types/Toast';

export interface ToastContextInterface {
  add: (toast: Toast) => void;
  error: (toast: Toast) => void;
  warning: (toast: Toast) => void;
  success: (toast: Toast) => void;
  primary: (toast: Toast) => void;
  remove: (key?: string | number) => void;
  toasts: Toast[];
}

export const ToastContext = React.createContext<ToastContextInterface>({
  add: () => undefined,
  error: () => undefined,
  warning: () => undefined,
  success: () => undefined,
  primary: () => undefined,
  remove: () => undefined,
  toasts: [],
});
