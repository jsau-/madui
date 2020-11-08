import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Page.styles';
import { useCurrentBreakpoint } from '../useCurrentBreakpoint';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
}

export const Page: React.FunctionComponent<PageProps> = (props: PageProps) => {
  const classes = useStyles();

  const breakpoint = useCurrentBreakpoint();

  return (
    <div
      className={clsx(
        classes.root,
        classes[breakpoint],
        props?.classes?.root,
        props?.classes?.breakpoint,
        props?.className,
      )}
    >
      {props.children}
    </div>
  );
};
