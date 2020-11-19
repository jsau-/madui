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

    /*
     * Hack: Because we're not actually using the state of the
     * progress bar to tell us when it's reached the end of its
     * animation, we're removing toasts before they've visibly
     * finished.
     *
     * By fudging it here, we give ourselves enough time for the
     * animation to finish.
     *
     * TODO: Progress bars should just accept a fixed time length,
     * and tell us when they've finished. That way we'll be able to
     * callback up to here and remove the toast once the presented
     * animation actually finishes.
     *
     * @see `src/Toast/Toast.tsx`
     */
    let lifetimeMs = toast.lifetimeMs;

    if (lifetimeMs !== undefined) {
      lifetimeMs += 250;
    }

    if (toast.lifetimeMs) {
      setTimeout(() => remove(key), lifetimeMs);
    }
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
