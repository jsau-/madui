import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Dialog.styles';
import { Card, CardProps } from '../Card';
import { Modal } from '../Modal';
import { Breakpoint } from '../types/Breakpoint';

export interface DialogProps extends CardProps {
  backdrop?: React.ReactNode;
  container?: React.MutableRefObject<HTMLElement | null>;
  maxWidth?: Breakpoint | 'fullWidth';
  onClose?: () => void;
  open?: boolean;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(props: DialogProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const {
      backdrop,
      classes,
      container,
      maxWidth: defaultMaxWidth,
      onClose,
      open,
      ...other
    } = props;

    const styles = useStyles();

    const maxWidth = defaultMaxWidth || 'fullWidth';

    return (
      <Modal
        backdrop={backdrop}
        container={container}
        onClose={onClose}
        open={open}
      >
        <div
          {...other}
          className={clsx(styles.root, classes?.root)}
          ref={forwardedRef}
        >
          <Card className={clsx(styles[maxWidth], classes?.[`${maxWidth}`])}>
            {props.children}
          </Card>
        </div>
      </Modal>
    );
  },
);
