import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useStyles } from './Fade.styles';

export interface FadeProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  show?: boolean;
}

export const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props: FadeProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { classes, show, ...other } = props;

  const styles = useStyles();
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
    }
  }, [show]);

  const onAnimationEnd = (): void => {
    if (!show) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      {...other}
      className={clsx(
        styles.root,
        show ? styles.fadeIn : styles.fadeOut,
        classes?.root,
        show ? classes?.fadeIn : classes?.fadeOut,
        props?.className,
      )}
      onAnimationEnd={onAnimationEnd}
      ref={forwardedRef}
    >
      {props.children}
    </div>
  );
});
