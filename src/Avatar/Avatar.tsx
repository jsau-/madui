import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Avatar.styles';
import { Color } from '../types/Color';
import { initials } from '../utils/initials';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  color?: Color;
  name: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props: AvatarProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { classes, color: defaultColor, name, ...other } = props;

    const styles = useStyles();
    const color = defaultColor || 'primary';
    const nameInitials = initials(name);

    return (
      <div
        {...other}
        className={clsx(
          styles.root,
          styles[color],
          classes?.root,
          classes?.[color],
          props?.className,
        )}
        ref={forwardedRef}
      >
        {nameInitials}
      </div>
    );
  },
);
