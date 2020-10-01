import React from 'react';
import ButtonMUI from '@material-ui/core/Button';

const Button = ({
  title, 
  color, 
  disabled = false, 
  disableElevation = false, 
  variant="contained", 
  size="medium",
  onClickHandle
}) => {
  return (
    <ButtonMUI 
      variant={variant}
      color={color}
      onClick={onClickHandle}
      disabled={disabled}
      disableElevation={disableElevation}
      size={size}
      >
      {title}
    </ButtonMUI>
  );
}

export default Button;