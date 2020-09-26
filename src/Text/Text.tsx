import React from 'react';
import { useStyles } from './Text.styles';
import { useTheme } from '../useTheme';

/**
 * Available text variant options.
 */
type TextVariant = 'heading' | 'subheading' | 'body' | 'caption';

type TextVariantMap<T> = { [variant in TextVariant]: T };

/**
 * Object mapping possible TextVariants to HTML element tags.
 */
const textVariantToWrapper: TextVariantMap<keyof JSX.IntrinsicElements> = {
  body: 'p',
  caption: 'h6',
  heading: 'h1',
  subheading: 'h3',
};

export interface TextProps {
  children?: React.ReactNode;
  variant?: TextVariant;
}

export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  const WrapperNode = props.variant ? textVariantToWrapper[props.variant] : 'p';
  return <WrapperNode className={classes.root}>{props.children}</WrapperNode>;
};
