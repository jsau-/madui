import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Text.styles';
import { TextVariant } from '../types/TextVariant';

type TextVariantMap<T> = { [variant in TextVariant]: T };

const textVariantToWrapper: TextVariantMap<keyof JSX.IntrinsicElements> = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export interface TextProps {
  bold?: boolean;
  classes?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
  italic?: boolean;
  variant?: TextVariant;
  wrapper?: keyof JSX.IntrinsicElements;
}

export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const classes = useStyles();

  const variant = props.variant || 'body1';

  const WrapperNode = props.wrapper || textVariantToWrapper[variant];

  let component = (
    <WrapperNode
      className={clsx(
        classes.root,
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
