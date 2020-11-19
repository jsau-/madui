import clsx from 'clsx';
import React from 'react';
import { useStyles } from './ToastManager.styles';
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
        {props.children}
      </div>
    );
  },
);
