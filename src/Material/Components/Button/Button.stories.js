import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material/Components/Inputs/Button',
  argTypes: {
    title: { control: 'text' },
    color: { 
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      }, 
    },
    disabled: { control: 'boolean' },
    disableElevation: { control: 'boolean' },
    variant: { 
      control: {
        type: 'select',
        options: ['contained', 'outlined'],
      }, 
    },
    size: { 
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      }, 
    },
  },
};

export const Default = (args) => (
  <Button
    {...args}
    onClickHandle={action('Button clicked!')}
  />
);

Default.args = { 
  title : 'buy now',
  color: 'primary',
  disabled: false,
  disableElevation: false,
  variant: 'contained',
  size: 'medium',
};

