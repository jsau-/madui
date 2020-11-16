import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from '.';

const TestComponent = (props) => {
  const 
};

export default {
  title: 'Components/Data/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
  checked: true,
  color: 'primary',
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
};

export const GreyChecked = Template.bind({});
GreyChecked.args = {
  checked: true,
  color: 'grey',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const ErrorChecked = Template.bind({});
ErrorChecked.args = {
  checked: true,
  color: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const WarningChecked = Template.bind({});
WarningChecked.args = {
  checked: true,
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const SuccessChecked = Template.bind({});
SuccessChecked.args = {
  checked: true,
  color: 'success',
};
