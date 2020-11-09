import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Hide.styles';
import { aboveWidth } from '../styles/breakpoint/aboveWidth';
import { belowWidth } from '../styles/breakpoint/belowWidth';
import { DisplayUnit } from '../types/DisplayUnit';
import { useMediaQuery } from '../useMediaQuery';

export interface HideProps {
  above?: number;
  aboveUnit?: DisplayUnit;
  below?: number;
  belowUnit?: DisplayUnit;
  children?: React.ReactNode;
  classes?: Record<string, string>;
  className?: string;
}

export const Hide = React.forwardRef<HTMLDivElement, HideProps>(function Hide(
  props: HideProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const classes = useStyles();

  let shouldHideForAbove = false;
  let shouldHideForBelow = false;

  if (props.above) {
    shouldHideForAbove = useMediaQuery(
      aboveWidth(props.above, props.aboveUnit),
    );
  }

  if (props.below) {
    shouldHideForBelow = useMediaQuery(
      belowWidth(props.below, props.belowUnit),
    );
  }

  const shouldHide = shouldHideForAbove || shouldHideForBelow;

  return (
    <div
      className={clsx(
        classes.root,
        props?.classes?.root,
        shouldHide && classes.hidden,
        shouldHide && props?.classes?.hidden,
        props?.className,
      )}
      ref={forwardedRef}
    >
      {props.children}
    </div>
  );
});
