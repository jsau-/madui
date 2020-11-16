import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Switch.styles';
import { Color } from '../types/Color';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  classes?: Record<string, string>;
  color?: Color;
}

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  function Switch(props: SwitchProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { checked, classes, color: defaultColor, ...other } = props;

    const styles = useStyles();

    const color = defaultColor || 'primary';

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        <div
          className={clsx({
            [styles[color]]: true,
            [styles.track]: true,
            [styles.checked]: checked,
            [`${classes?.track}`]: true,
            [`${classes?.checked}`]: checked,
          })}
        />
        <div
          className={clsx({
            [styles[color]]: true,
            [styles.toggle]: true,
            [styles.checked]: checked,
            [`${classes?.toggle}`]: true,
            [`${classes?.checked}`]: checked,
          })}
        />
      </div>
    );
  },
);
