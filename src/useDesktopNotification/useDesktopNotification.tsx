import { useEffect, useMemo, useState } from 'react';

export const useDesktopNotification = () => {
  const [supported, setSupported] = useState('Notification' in window);
  const [permissionGranted, setPermissionGranted] = useState(
    supported && 'granted' === Notification.permission,
  );

  useEffect(() => {
    /*
     * TODO: Surely there's a nicer way of tracking this using callbacks.
     */
    const interval = setInterval(() => {
      const supported = 'Notification' in window;
      setSupported(supported);
      setPermissionGranted(supported && 'granted' === Notification.permission);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const requestPermission = (): Promise<NotificationPermission> | undefined => {
    if (!supported) {
      return undefined;
    }

    return Notification.requestPermission();
  };

  const show = (
    title: string,
    options?: NotificationOptions,
  ): Notification | undefined => {
    if (!supported) {
      return undefined;
    }

    if (!permissionGranted) {
      Notification.requestPermission().then(newPermission => {
        // NB: Not using state here since it might not have updated!
        if ('granted' === newPermission) {
          return new Notification(title, options);
        }

        return undefined;
      });
    }

    return new Notification(title, options);
  };

  const value = useMemo(
    () => ({
      permissionGranted,
      requestPermission,
      show,
      supported,
    }),
    [supported, permissionGranted],
  );

  return value;
};
