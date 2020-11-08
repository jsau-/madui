import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Page.styles';
import { PageContent } from '../PageContent';
import { usePage } from '../usePage';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const Page: React.FunctionComponent<PageProps> = (props: PageProps) => {
  const pageContext = usePage();
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props?.classes?.root, props?.className)}>
      {pageContext.navbar.isOpen && (
        <div className={clsx(classes.navbar, props?.classes?.navbar)}>
          {props.navbar}
        </div>
      )}
      <div className={clsx(classes.view, props?.classes?.view)}>
        {pageContext.sidebar.isOpen && (
          <div className={clsx(classes.sidebar, props?.classes?.sidebar)}>
            {props.sidebar}
          </div>
        )}
        <PageContent className={clsx(classes.content, props?.classes?.content)}>
          {props.children}
        </PageContent>
      </div>
      {pageContext.footer.isOpen && (
        <div className={clsx(classes.footer, props?.classes?.footer)}>
          {props.footer}
        </div>
      )}
    </div>
  );
};
