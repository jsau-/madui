import React from 'react';
import CheckboxMUI  from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkbox = ({
    color, 
    checked=false,
    handleChange=() => {},
    inputProps={ 'aria-label': 'primary checkbox' },
    defaultChecked=false,
    label='',
}) => {
  return (
    <FormControlLabel
    control={
        <CheckboxMUI 
            color={color} 
            checked={checked}
            onChange={handleChange}
            inputProps={inputProps}
            defaultChecked={defaultChecked}
            name="checkedA" 
        />
    }
    label={label}
  />
  );
}

export default Checkbox;