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

export const StandardPrimary = Template.bind({});
StandardPrimary.args = {
  children: 'Hello!',
  color: 'primary',
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const StandardPrimaryDisabled = Template.bind({});
StandardPrimaryDisabled.args = {
  children: 'Hello!',
  color: 'primary',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'standard',
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

export const StandardGrey = Template.bind({});
StandardGrey.args = {
  children: 'Hello!',
  color: 'grey',
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const StandardGreyDisabled = Template.bind({});
StandardGreyDisabled.args = {
  children: 'Hello!',
  color: 'grey',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const SolidError = Template.bind({});
SolidError.args = {
  children: 'Hello!',
  color: 'error',
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const SolidErrorDisabled = Template.bind({});
SolidErrorDisabled.args = {
  children: 'Hello!',
  color: 'error',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const OutlinedError = Template.bind({});
OutlinedError.args = {
  children: 'Hello!',
  color: 'error',
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const OutlinedErrorDisabled = Template.bind({});
OutlinedErrorDisabled.args = {
  children: 'Hello!',
  color: 'error',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const StandardError = Template.bind({});
StandardError.args = {
  children: 'Hello!',
  color: 'error',
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const StandardErrorDisabled = Template.bind({});
StandardErrorDisabled.args = {
  children: 'Hello!',
  color: 'error',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const SolidWarning = Template.bind({});
SolidWarning.args = {
  children: 'Hello!',
  color: 'warning',
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const SolidWarningDisabled = Template.bind({});
SolidWarningDisabled.args = {
  children: 'Hello!',
  color: 'warning',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  children: 'Hello!',
  color: 'warning',
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const OutlinedWarningDisabled = Template.bind({});
OutlinedWarningDisabled.args = {
  children: 'Hello!',
  color: 'warning',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const StandardWarning = Template.bind({});
StandardWarning.args = {
  children: 'Hello!',
  color: 'warning',
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const StandardWarningDisabled = Template.bind({});
StandardWarningDisabled.args = {
  children: 'Hello!',
  color: 'warning',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const SolidSuccess = Template.bind({});
SolidSuccess.args = {
  children: 'Hello!',
  color: 'success',
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const SolidSuccessDisabled = Template.bind({});
SolidSuccessDisabled.args = {
  children: 'Hello!',
  color: 'success',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'solid',
};

export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  children: 'Hello!',
  color: 'success',
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const OutlinedSuccessDisabled = Template.bind({});
OutlinedSuccessDisabled.args = {
  children: 'Hello!',
  color: 'success',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'outlined',
};

export const StandardSuccess = Template.bind({});
StandardSuccess.args = {
  children: 'Hello!',
  color: 'success',
  onClick: () => console.log('Click!'),
  variant: 'standard',
};

export const StandardSuccessDisabled = Template.bind({});
StandardSuccessDisabled.args = {
  children: 'Hello!',
  color: 'success',
  disabled: true,
  onClick: () => console.log('Click!'),
  variant: 'standard',
};
