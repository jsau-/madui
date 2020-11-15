import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Avatar.styles';
import { initials } from '../utils/initials';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  name: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props: AvatarProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const { classes, name, ...other } = props;

    const styles = useStyles();
    const nameInitials = initials(name);

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {nameInitials}
      </div>
    );
  },
);
