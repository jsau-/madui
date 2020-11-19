import clsx from 'clsx';
import React from 'react';
import { useStyles } from './ToastManager.styles';
import { Toast } from '../Toast';
import { useToast } from '../useToast';
import { AnchorPoint } from '../types/AnchorPoint';

export interface ToastManagerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  anchorPoint?: AnchorPoint;
  classes?: Record<string, string>;
}

export const ToastManager = React.forwardRef<HTMLDivElement, ToastManagerProps>(
  function ToastManager(
    props: ToastManagerProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const { anchorPoint: defaultAnchorPoint, classes, ...other } = props;

    const styles = useStyles();
    const { remove, toasts } = useToast();

    const anchorPoint = defaultAnchorPoint || { x: 'right', y: 'top' };

    return (
      <div
        {...other}
        className={clsx(
          styles.root,
          styles[anchorPoint.x],
          styles[anchorPoint.y],
          classes?.root,
          classes?.[anchorPoint.x],
          classes?.[anchorPoint.y],
        )}
        ref={forwardedRef}
      >
        {toasts.map(toast => (
          <Toast
            color={toast.color}
            icon={toast.icon}
            lifetimeMs={toast.lifetimeMs}
            key={toast.key}
            onDismiss={
              toast.disableDismissal ? undefined : () => remove(toast.key)
            }
            title={toast.title}
            subtitle={toast.subtitle}
          />
        ))}
      </div>
    );
  },
);
