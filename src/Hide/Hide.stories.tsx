import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Hide, HideProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Layout/Hide',
  component: Hide,
} as Meta;

const Template: Story<HideProps> = args => <Hide {...args} />;

export const HiddenAbove800px = Template.bind({});
HiddenAbove800px.args = {
  above: 800,
  children: <Text>I am hidden above 800px width</Text>,
};

export const HiddenBelow800px = Template.bind({});
HiddenBelow800px.args = {
  below: 800,
  children: <Text>I am hidden below 800px width</Text>,
};
