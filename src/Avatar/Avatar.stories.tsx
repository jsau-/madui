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
