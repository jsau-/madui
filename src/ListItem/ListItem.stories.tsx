import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListItem, ListItemProps } from '.';
import { List } from '../List';
import { Text } from '../Text';

export default {
  title: 'Components/Data/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = args => <List><ListItem {...args} /></List>;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Hello, world!</Text>
};
