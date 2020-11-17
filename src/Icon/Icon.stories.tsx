import { Calendar } from 'react-feather';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, IconProps } from '.';

export default {
  title: 'Components/Data/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Calendar />,
};

export const Primary = Template.bind({});
Primary.args = {
  children: <Calendar />,
  color: 'primary',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  children: <Calendar />,
  color: 'primary',
  height: 128,
  width: 128,
};

export const Grey = Template.bind({});
Grey.args = {
  children: <Calendar />,
  color: 'grey',
};

export const Error = Template.bind({});
Error.args = {
  children: <Calendar />,
  color: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  children: <Calendar />,
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  children: <Calendar />,
  color: 'success',
};
