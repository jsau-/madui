import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListItem, ListItemProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = args => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Hello, world!</Text>
};
