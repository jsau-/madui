import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Form/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello!',
  onClick: () => console.log('Click!'),
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello!',
  color: 'primary',
  onClick: () => console.log('Click!'),
};
