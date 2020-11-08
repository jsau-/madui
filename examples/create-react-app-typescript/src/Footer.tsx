import React from 'react';
import { makeStyles, Text } from 'madui';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Text>Copyrighted. All rights reserved.</Text>
    </footer>
  )
}

export default Footer;
