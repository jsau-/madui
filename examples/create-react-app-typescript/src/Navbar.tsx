import React from 'react';
import { makeStyles, Text, Theme } from 'madui';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 4 * theme.spacing.unit,
  },
  icon: {
    flexGrow: 0,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 4 * theme.spacing.unit,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.icon}>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="20" fill="red" />
        </svg>
      </div>
      <div className={classes.content}>
        <Text>My example site.</Text>
      </div>
    </header>
  )
}

export default Navbar;
