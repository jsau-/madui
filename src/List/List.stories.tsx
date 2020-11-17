import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { List, ListProps } from '.';
import { ListItem } from '../ListItem';
import { Text } from '../Text';

export default {
  title: 'Components/Data/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <ListItem>
        <Text>One</Text>
      </ListItem>
      <ListItem>
        <Text>Two</Text>
      </ListItem>
      <ListItem>
        <Text>Three</Text>
      </ListItem>
    </React.Fragment>
  ),
};
