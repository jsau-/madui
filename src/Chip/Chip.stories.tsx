import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Chip, ChipProps } from '.';

export default {
  title: 'Components/Data/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = args => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello!',
  color: 'primary',
};

export const Grey = Template.bind({});
Grey.args = {
  children: 'Hello!',
  color: 'grey',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Hello!',
  color: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Hello!',
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Hello!',
  color: 'success',
};
