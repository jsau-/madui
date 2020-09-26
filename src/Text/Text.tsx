import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Text.styles';
import { useTheme } from '../useTheme';

type TextVariant = 'heading' | 'subheading' | 'body' | 'caption';

type TextVariantMap<T> = { [variant in TextVariant]: T };

const textVariantToWrapper: TextVariantMap<keyof JSX.IntrinsicElements> = {
  body: 'p',
  caption: 'h6',
  heading: 'h1',
  subheading: 'h3',
};

export interface TextProps {
  classes?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
  variant?: TextVariant;
}

export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  const variant = props.variant || 'body';

  const WrapperNode = textVariantToWrapper[variant];

  return (
    <WrapperNode
      className={clsx(
        classes.root,
        classes[variant],
        props?.classes?.root,
        props?.classes?.variant,
        props?.className
      )}
    >
      {props.children}
    </WrapperNode>
  );
};
