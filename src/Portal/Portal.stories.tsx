import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Portal, PortalProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Portal',
  component: Portal,
} as Meta;

const Template: Story<PortalProps> = args => (
  <div>
    <Text>A direct child of a div!</Text>
    <Portal {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <Text>Outside my parent node using a portal!</Text>,
};

export const Nested = Template.bind({});
Nested.args = {
  children: (
    <div>
      <Text>
        Outside my parent node using a portal! Inspect me in developer tools!
      </Text>
      <Portal>
        <Text>A nested portal!</Text>
      </Portal>
    </div>
  ),
};
