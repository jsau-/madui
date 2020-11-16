import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Switch.styles';
import { Color } from '../types/Color';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  classes?: Record<string, string>;
  color?: Color;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  function Switch(props: SwitchProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { checked, classes, color: defaultColor, inputProps, inputRef, onChange, ...other } = props;

    const styles = useStyles();

    const color = defaultColor || 'primary';

    return (
      <div
        {...other}
        aria-checked={checked}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
        role="checkbox"
      >
        <input
          {...inputProps}
          checked={checked || false}
          className={clsx({
            [styles.input]: true,
            [styles.checked]: checked,
            [`${classes?.input}`]: true,
            [`${classes?.checked}`]: checked,
          })}
          onChange={onChange}
          ref={inputRef}
          type="checkbox"
        />
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
