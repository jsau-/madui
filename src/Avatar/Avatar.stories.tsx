import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/User/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  name: 'Foo Bar',
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  name: 'Foo Bar',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  name: 'Foo Bar',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  name: 'Foo Bar',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  name: 'Foo Bar',
};
