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

  const WrapperNode = props.variant ? textVariantToWrapper[props.variant] : 'p';

  return (
    <WrapperNode
      className={clsx(classes.root, props?.classes?.root, props?.className)}
    >
      {props.children}
    </WrapperNode>
  );
};
