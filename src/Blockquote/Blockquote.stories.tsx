import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Blockquote, BlockquoteProps } from '.';
import { Text } from '../Text';

const children = (
  <React.Fragment>
    <Text>Hello, world!</Text>
    <Text>This is some sample text!</Text>
  </React.Fragment>
);

export default {
  title: 'Components/Text/Blockquote',
  component: Blockquote,
};

const Template: Story<BlockquoteProps> = args => <Blockquote {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children,
};

export const Secondary = Template.bind({});
Secondary.args = {
  borderColor: 'secondary',
  children,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  borderColor: 'none',
  children,
};
