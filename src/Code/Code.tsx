import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Code.styles';
import { Color } from '../types/Color';

export interface CodeProps {
  block?: boolean;
  children?: React.ReactNode;
  classes?: Record<string, string>;
  className?: string;
  color?: Color;
}

export const Code: React.FunctionComponent<CodeProps> = (props: CodeProps) => {
  const classes = useStyles();

  const color: Color = props.color || 'primary';

  return (
    <div
      className={clsx(
        classes.root,
        classes[color],
        props?.classes?.root,
        props?.classes?.[color],
        props?.className,
      )}
    >
      <code
        className={clsx(
          classes.code,
          props.block && classes.block,
          props?.classes?.code,
          props.block && props?.classes?.block,
        )}
      >
        {props.children}
      </code>
    </div>
  );
};
