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

export interface TextProps
  extends React.HTMLAttributes<
    HTMLParagraphElement & HTMLSpanElement & HTMLHeadingElement
  > {
  bold?: boolean;
  classes?: Record<string, string>;
  inheritColor?: boolean;
  inline?: boolean;
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
  const {
    bold,
    classes,
    inline,
    inheritColor,
    italic,
    variant,
    wrapper,
    ...other
  } = props;

  const styles = useStyles();

  const WrapperNode = wrapper || textVariantToWrapper[variant || 'body1'];

  let children = props.children;

  if (bold) {
    children = <b>{children}</b>;
  }

  if (italic) {
    children = <i>{children}</i>;
  }

  return (
    <WrapperNode
      {...other}
      className={clsx(
        styles.root,
        styles[variant || 'body1'],
        {
          [styles.inline]: inline,
          [styles.inheritColor]: inheritColor,
        },
        classes?.root,
        classes?.[variant || 'body1'],
        {
          [`${classes?.inline}`]: inline,
          [`${classes?.inheritColor}`]: inheritColor,
        },
        props?.className,
      )}
      ref={forwardedRef}
    >
      {children}
    </WrapperNode>
  );
});
