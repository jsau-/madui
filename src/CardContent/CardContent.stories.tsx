import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardContent, CardContentProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Surfaces/CardContent',
  component: CardContent,
} as Meta;

const Template: Story<CardContentProps> = args => <CardContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Hello, world!</Text>,
};
