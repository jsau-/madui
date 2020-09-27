import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Text.styles';
import { TextVariant } from '../types/TextVariant';

type TextVariantMap<T> = { [variant in TextVariant]: T };

const textVariantToWrapper: TextVariantMap<keyof JSX.IntrinsicElements> = {
  body: 'p',
  caption: 'h6',
  heading: 'h1',
  subheading: 'h3',
};

export interface TextProps {
  bold?: boolean;
  classes?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
  inheritColor?: boolean;
  italic?: boolean;
  variant?: TextVariant;
}

export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const classes = useStyles();

  const variant = props.variant || 'body';

  const WrapperNode = textVariantToWrapper[variant];

  let component = (
    <WrapperNode
      className={clsx(
        classes.root,
        props.inheritColor ? classes.inheritColor : classes.defaultColor,
        classes[variant],
        props?.classes?.root,
        props?.classes?.[variant],
        props?.className,
      )}
    >
      {props.children}
    </WrapperNode>
  );

  if (props.bold) {
    component = <b>{component}</b>;
  }

  if (props.italic) {
    component = <i>{component}</i>;
  }

  return component;
};
