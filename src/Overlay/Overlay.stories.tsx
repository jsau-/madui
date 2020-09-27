import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Overlay, OverlayProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Layout/Overlay',
  component: Overlay,
} as Meta;

const Template: Story<OverlayProps> = args => <Overlay {...args} />;

export const Open = Template.bind({});
Open.args = {
  children: <Text>Open!</Text>,
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  children: <Text>Open!</Text>,
};
