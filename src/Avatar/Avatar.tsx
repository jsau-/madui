import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Avatar.styles';
import { initials } from '../utils/initials';

export interface AvatarProps {
  className?: string;
  classes?: Record<string, string>;
  name: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props: AvatarProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const classes = useStyles();
    const nameInitials = initials(props.name);

    return (
      <div
        className={clsx(classes.root, props?.classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {nameInitials}
      </div>
    );
  },
);
