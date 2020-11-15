import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinearProgress, LinearProgressProps } from '.';

export default {
  title: 'Components/Data/LinearProgress',
  component: LinearProgress,
} as Meta;

const Template: Story<LinearProgressProps> = args => <LinearProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  value: 50,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  color: 'primary',
  rounded: true,
  value: 50,
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  value: 50,
};

export const GreyRounded = Template.bind({});
GreyRounded.args = {
  color: 'grey',
  rounded: true,
  value: 50,
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  value: 50,
};

export const ErrorRounded = Template.bind({});
ErrorRounded.args = {
  color: 'error',
  rounded: true,
  value: 50,
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  value: 50,
};

export const WarningRounded = Template.bind({});
WarningRounded.args = {
  color: 'warning',
  rounded: true,
  value: 50,
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  value: 50,
};

export const SuccessRounded = Template.bind({});
SuccessRounded.args = {
  color: 'success',
  rounded: true,
  value: 50,
};
