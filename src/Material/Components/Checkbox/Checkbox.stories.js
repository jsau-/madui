import React from 'react';
import Checkbox from './Checkbox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material/Components/Inputs/Checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    color: { 
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      }, 
    },
    inputProps: { control: 'object' },
  },
};

export const Default = (args) => (
  <Checkbox
    {...args}
    handleChange={action('clicked!')}
  />
);

Default.args = { 
    label: 'My checkbox',
    color: 'primary',
    checked: true,
    inputProps :{ 'aria-label': 'primary checkbox' },
};
