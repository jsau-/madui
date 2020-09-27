import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Low = Template.bind({});
Low.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'low',
};

export const Medium = Template.bind({});
Medium.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'medium',
};

export const High = Template.bind({});
High.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'high',
};
