import clsx from 'clsx';
import React from 'react';
import { useStyles } from './ListItem.styles';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  classes?: Record<string, string>;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem(
    props: ListItemProps,
    forwardedRef: React.Ref<HTMLLIElement>,
  ) {
    const { classes, ...other } = props;

    const styles = useStyles();

    return (
      <li
        {...other}
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        {props.children}
      </li>
    );
  },
);
