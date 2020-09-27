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

  const { color: optionalColor, ...otherProps } = props;

  const color: Color = optionalColor || 'primary';

  return (
    <a
      {...otherProps}
      className={clsx(
        classes.root,
        classes[color],
        props?.classes?.root,
        props?.classes?.[color],
        props?.className,
      )}
    >
      {props.children}
    </a>
  );
};
