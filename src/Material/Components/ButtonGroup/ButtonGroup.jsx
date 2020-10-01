import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroupMUI from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const ButtonGroup = ({
  title, 
  color="primary", 
  disabled = false, 
  disableElevation = false, 
  variant="contained", 
  size="medium",
  onClickHandle
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroupMUI 
        color={color}
        variant={variant}
        disabled={disabled}
        disableElevation={disableElevation}
        size={size}
        >
        <Button onClick={onClickHandle}>{title}</Button>
        <Button onClick={onClickHandle}>{title}</Button>
        <Button onClick={onClickHandle}>{title}</Button>
      </ButtonGroupMUI>
    </div>
  );
}

export default ButtonGroup;