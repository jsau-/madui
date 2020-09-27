import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Link.styles';
import { Color } from '../types/Color';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  classes?: Record<string, string>;
  color?: Color;
}

export const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const classes = useStyles();

  const { color, ...otherProps } = props;

  const colorWithDefault: Color = color || 'primary';

  return (
    <a
      {...otherProps}
      className={clsx(
        classes.root,
        classes[colorWithDefault],
        props?.classes?.root,
        props?.classes?.[colorWithDefault],
        props?.className,
      )}
    >
      {props.children}
    </a>
  );
};
