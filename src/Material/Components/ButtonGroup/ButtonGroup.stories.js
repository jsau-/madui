import React from 'react';

import ButtonGroup from './ButtonGroup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material/Components/Inputs/Button group',
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
  <ButtonGroup
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