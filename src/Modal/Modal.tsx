import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Modal.styles';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  backdrop?: React.ReactNode;
  classes?: Record<string, string>;
  container?: React.MutableRefObject<HTMLElement | null>;
  onClose?: () => void;
  open?: boolean;
}

/**
 * TODO: Trap focus within modal; close on pressing escape
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(props: ModalProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { backdrop, classes, container, onClose, open, ...other } = props;

    const styles = useStyles();

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
            {props.children}
          </div>
        )}
      </Portal>
    );
  },
);
