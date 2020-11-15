import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Overlay.styles';
import { Fade } from '../Fade';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  open?: boolean;
}

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay(
    props: OverlayProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const { classes, open, ...other } = props;

    const styles = useStyles();

    return (
      <Fade {...other} ref={forwardedRef} show={open}>
        <div
          aria-hidden
          className={clsx(styles.root, classes?.root, props?.className)}
        >
          {props.children}
        </div>
      </Fade>
    );
  },
);
