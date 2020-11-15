import clsx from 'clsx';
import React from 'react';
import { useStyles } from './Page.styles';
import { usePage } from '../usePage';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const Page = React.forwardRef(function Page(
  props: PageProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { classes, footer, navbar, sidebar, ...other } = props;

  const pageContext = usePage();
  const styles = useStyles();

  return (
    <div
      {...other}
      className={clsx(styles.root, classes?.root, props?.className)}
      ref={forwardedRef}
    >
      {pageContext.navbar.isOpen && (
        <div className={clsx(styles.navbar, classes?.navbar)}>{navbar}</div>
      )}
      <div className={clsx(styles.view, classes?.view)}>
        {pageContext.sidebar.isOpen && (
          <div className={clsx(styles.sidebar, classes?.sidebar)}>
            {sidebar}
          </div>
        )}
        <div className={clsx(styles.content, classes?.content)}>
          {props.children}
        </div>
      </div>
      {pageContext.footer.isOpen && (
        <div className={clsx(styles.footer, classes?.footer)}>{footer}</div>
      )}
    </div>
  );
});
