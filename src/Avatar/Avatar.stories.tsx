import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/User/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Foo Bar',
};
