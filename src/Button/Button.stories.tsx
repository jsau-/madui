import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Form/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const SolidPrimary = Template.bind({});
SolidPrimary.args = {
  children: 'Hello!',
  color: 'primary',
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const SolidPrimaryDisabled = Template.bind({});
SolidPrimaryDisabled.args = {
  children: 'Hello!',
  color: 'primary',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: 'Hello!',
  color: 'primary',
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const OutlinedPrimaryDisabled = Template.bind({});
OutlinedPrimaryDisabled.args = {
  children: 'Hello!',
  color: 'primary',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const SolidGrey = Template.bind({});
SolidGrey.args = {
  children: 'Hello!',
  color: 'grey',
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const SolidGreyDisabled = Template.bind({});
SolidGreyDisabled.args = {
  children: 'Hello!',
  color: 'grey',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const OutlinedGrey = Template.bind({});
OutlinedGrey.args = {
  children: 'Hello!',
  color: 'grey',
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const OutlinedGreyDisabled = Template.bind({});
OutlinedGreyDisabled.args = {
  children: 'Hello!',
  color: 'grey',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};
