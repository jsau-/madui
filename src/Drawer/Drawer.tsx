import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Drawer.styles';
import { Overlay } from '../Overlay';
import { Paper } from '../Paper';
import { Portal } from '../Portal';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  backdrop?: React.ReactNode;
  classes?: Record<string, string>;
  container?: React.MutableRefObject<HTMLElement | null>;
  onClose?: () => void;
  open?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * TODO: Trap focus within drawer; close on pressing escape
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(props: DrawerProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const {
      backdrop,
      classes,
      container,
      onClose,
      open,
      placement: defaultPlacement,
      ...other
    } = props;

    const styles = useStyles();

    const placement = defaultPlacement || 'right';

    return (
      <Portal container={container}>
        {open && (
          <div
            {...other}
            aria-hidden={!open}
            aria-modal="true"
            className={clsx(
              styles.root,
              { [styles.open]: open },
              classes?.root,
              {
                [`${classes?.open}`]: open,
              },
            )}
            ref={forwardedRef}
            role="presentation"
          >
            <div
              className={clsx(
                styles.backdrop,
                { [styles.open]: open },
                classes?.backdrop,
                { [`${classes?.open}`]: open },
              )}
              onClick={onClose}
            >
              {backdrop ? backdrop : <Overlay open />}
            </div>
            <Paper
              className={clsx(
                styles.content,
                styles[placement],
                classes?.content,
                classes?.[placement],
              )}
              elevation="high"
              square
            >
              {props.children}
            </Paper>
          </div>
        )}
      </Portal>
    );
  },
);
