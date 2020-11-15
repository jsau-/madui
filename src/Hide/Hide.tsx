import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Hide.styles';
import { aboveWidth } from '../styles/breakpoint/aboveWidth';
import { belowWidth } from '../styles/breakpoint/belowWidth';
import { DisplayUnit } from '../types/DisplayUnit';
import { useMediaQuery } from '../useMediaQuery';

export interface HideProps extends React.HTMLAttributes<HTMLDivElement> {
  above?: number;
  aboveUnit?: DisplayUnit;
  below?: number;
  belowUnit?: DisplayUnit;
  classes?: Record<string, string>;
}

export const Hide = React.forwardRef<HTMLDivElement, HideProps>(function Hide(
  props: HideProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { above, aboveUnit, below, belowUnit, classes, ...other } = props;

  const styles = useStyles();

  let shouldHideForAbove = false;
  let shouldHideForBelow = false;

  if (above) {
    shouldHideForAbove = useMediaQuery(aboveWidth(above, aboveUnit));
  }

  if (below) {
    shouldHideForBelow = useMediaQuery(belowWidth(below, belowUnit));
  }

  const shouldHide = shouldHideForAbove || shouldHideForBelow;

  return (
    <div
      {...other}
      className={clsx(
        styles.root,
        classes?.root,
        shouldHide && styles.hidden,
        shouldHide && classes?.hidden,
        props?.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </div>
  );
});
