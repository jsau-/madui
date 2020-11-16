import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Switch.styles';
import { Color } from '../types/Color';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  classes?: Record<string, string>;
  color?: Color;
  disabled?: boolean;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  function Switch(props: SwitchProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const {
      checked,
      classes,
      color: defaultColor,
      disabled,
      inputProps,
      inputRef,
      onChange,
      ...other
    } = props;

    const styles = useStyles();

    const color = defaultColor || 'primary';

    return (
      <div
        {...other}
        aria-checked={checked}
        className={clsx({
          [styles.root]: true,
          [styles.checked]: checked,
          [styles.disabled]: disabled,
          [`${classes?.root}`]: true,
          [`${classes?.checked}`]: checked,
          [`${classes?.disabled}`]: disabled,
          [`${props?.className}`]: true,
        })}
        ref={forwardedRef}
        role="checkbox"
      >
        <input
          {...inputProps}
          checked={checked || false}
          className={clsx({
            [styles.input]: true,
            [styles.checked]: checked,
            [styles.disabled]: disabled,
            [`${classes?.input}`]: true,
            [`${classes?.checked}`]: checked,
            [`${classes?.disabled}`]: disabled,
          })}
          disabled={disabled}
          onChange={onChange}
          ref={inputRef}
          type="checkbox"
        />
        <div
          className={clsx({
            [styles[color]]: true,
            [styles.track]: true,
            [styles.checked]: checked,
            [styles.disabled]: disabled,
            [`${classes?.track}`]: true,
            [`${classes?.checked}`]: checked,
          })}
        />
        <div
          className={clsx({
            [styles[color]]: true,
            [styles.toggle]: true,
            [styles.checked]: checked,
            [styles.disabled]: disabled,
            [`${classes?.toggle}`]: true,
            [`${classes?.checked}`]: checked,
            [`${classes?.disabled}`]: disabled,
          })}
        />
      </div>
    );
  },
);
