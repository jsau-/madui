import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Blockquote.styles';
import { Color } from '../types/Color';

export interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLElement> {
  classes?: Record<string, string>;
  borderColor?: Color | 'none';
}

export const Blockquote: React.FunctionComponent<BlockquoteProps> = (
  props: BlockquoteProps,
) => {
  const classes = useStyles();

  const {
    borderColor: optionalBorderColor,
    classes: optionalClasses,
    ...otherProps
  } = props;

  const borderColor = optionalBorderColor || 'primary';

  return (
    <blockquote
      {...otherProps}
      className={clsx(
        classes.root,
        classes[borderColor],
        optionalClasses?.root,
        optionalClasses?.[borderColor],
        props?.className,
      )}
    >
      {props.children}
    </blockquote>
  );
};
