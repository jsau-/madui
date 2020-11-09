import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useStyles } from './Fade.styles';

export interface FadeProps {
  children: React.ReactNode;
  classes?: Record<string, string>;
  className?: string;
  show?: boolean;
}

export const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props: FadeProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const classes = useStyles();
  const [visible, setVisible] = useState(props.show);

  useEffect(() => {
    if (props.show) {
      setVisible(true);
    }
  }, [props.show]);

  const onAnimationEnd = (): void => {
    if (!props.show) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(
        classes.root,
        props.show ? classes.fadeIn : classes.fadeOut,
        props?.classes?.root,
        props.show ? props?.classes?.fadeIn : props?.classes?.fadeOut,
        props?.className,
      )}
      onAnimationEnd={onAnimationEnd}
      ref={forwardedRef}
    >
      {props.children}
    </div>
  );
});
