import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Text.styles';
import { TextVariant } from '../types/TextVariant';

type TextWrappers = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextVariantMap<T> = { [variant in TextVariant]: T };

const textVariantToWrapper: TextVariantMap<TextWrappers> = {
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
  wrapper?: TextWrappers;
}

export const Text = React.forwardRef(function Text(
  props: TextProps,
  forwardedRef: React.Ref<
    HTMLParagraphElement & HTMLSpanElement & HTMLHeadingElement
  >,
) {
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
      ref={forwardedRef}
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
});
