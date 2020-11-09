import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Paper, PaperProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Surfaces/Paper',
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = args => <Paper {...args} />;

export const NoElevation = Template.bind({});
NoElevation.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'none',
};

export const Square = Template.bind({});
Square.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'none',
  square: true,
};

export const LowElevation = Template.bind({});
LowElevation.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'low',
};

export const MediumElevation = Template.bind({});
MediumElevation.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'medium',
};

export const HighElevation = Template.bind({});
HighElevation.args = {
  children: <Text>Hello, world!</Text>,
  elevation: 'high',
};
