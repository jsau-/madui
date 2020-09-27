import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Overlay.styles';
import { Fade } from '../Fade';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  open?: boolean;
}

export const Overlay: React.FunctionComponent<OverlayProps> = (
  props: OverlayProps,
) => {
  const classes = useStyles();

  return (
    <Fade show={props.open}>
      <div
        aria-hidden
        className={clsx(classes.root, props?.classes?.root, props?.className)}
      >
        {props.children}
      </div>
    </Fade>
  );
};
