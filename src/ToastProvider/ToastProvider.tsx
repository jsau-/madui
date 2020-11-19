import uniqueId from 'lodash/uniqueId';
import React, { useMemo, useState } from 'react';
import { ToastContext } from './ToastContext';
import { Toast } from '../types/Toast';

export interface ToastProviderProps {
  children?: React.ReactNode;
}

export function ToastProvider(props: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const { children } = props;

  const remove = (key?: string | number) => {
    setToasts(existingToasts =>
      existingToasts.filter(toast => toast.key !== key),
    );
  };

  const add = (toast: Toast) => {
    const key = toast.key || `madui-toast-${uniqueId()}`;

    setToasts(existingToasts => [
      ...existingToasts,
      {
        ...toast,
        key,
      },
    ]);
  };

  const success = (toast: Toast) => add({ ...toast, color: 'success' });
  const error = (toast: Toast) => add({ ...toast, color: 'error' });
  const warning = (toast: Toast) => add({ ...toast, color: 'warning' });
  const primary = (toast: Toast) => add({ ...toast, color: 'primary' });

  const value = useMemo(
    () => ({
      add,
      remove,
      success,
      error,
      warning,
      primary,
      toasts,
    }),
    [toasts],
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
