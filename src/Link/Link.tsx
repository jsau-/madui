import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Link.styles';
import { Text } from '../Text';
import { Color } from '../types/Color';
import { TextVariant } from '../types/TextVariant';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  classes?: Record<string, string>;
  color?: Color;
  variant?: TextVariant;
}

export const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const classes = useStyles();

  const { color, ...otherProps } = props;

  return (
    <a {...otherProps} className={clsx(
      classes.root,
      classes[color || 'primary'],
      props?.classes?.root,
      props?.classes?.color,
      props?.className,
    )}>
      <Text inheritColor variant={props.variant}>
        {props.children}
      </Text>
    </a>
  );
}
