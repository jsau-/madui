import clsx from 'clsx';
import React from 'react';
import { useStyles } from './PageContent.styles';
import { useCurrentBreakpoint } from '../useCurrentBreakpoint';

export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
}

export const PageContent: React.FunctionComponent<PageContentProps> = (
  props: PageContentProps,
) => {
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
