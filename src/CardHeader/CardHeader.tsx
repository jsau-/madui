import clsx from 'clsx';
import React from 'react';
import { useStyles } from './CardHeader.styles';
import { Text } from '../Text';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader(
    props: CardHeaderProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const { classes, left, right, title, ...other } = props;

    const styles = useStyles();

    return (
      <div
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {left && <div className={clsx(styles.left, classes?.left)}>{left}</div>}
        {title && (
          <div className={clsx(styles.title, classes?.title)}>
            <Text variant="h6">{title}</Text>
          </div>
        )}
        {right && (
          <div className={clsx(styles.right, classes?.right)}>{right}</div>
        )}
      </div>
    );
  },
);
