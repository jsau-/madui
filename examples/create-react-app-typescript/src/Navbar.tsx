import React from 'react';
import { makeStyles, Text } from 'madui';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Text>My example site.</Text>
    </header>
  )
}

export default Navbar;
