import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardHeader.styles';
import { Text } from '../Text';

export interface CardHeaderProps {
  classes?: Record<string, string>;
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
}

export const CardHeader: React.FunctionComponent<CardHeaderProps> = (
  props: CardHeaderProps,
) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props?.classes?.root, props?.className)}>
      {props.left && (
        <div className={clsx(classes.left, props?.classes?.left)}>
          {props.left}
        </div>
      )}
      {props.title && (
        <div className={clsx(classes.title, props?.classes?.title)}>
          <Text variant="h6">{props.title}</Text>
        </div>
      )}
      {props.right && (
        <div className={clsx(classes.right, props?.classes?.right)}>
          {props.right}
        </div>
      )}
    </div>
  );
};
