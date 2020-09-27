import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import { Blockquote } from '../Blockquote';
import { CardHeader} from '../CardHeader';
import { Code } from '../Code';
import { Text } from '../Text';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const LowElevation = Template.bind({});
LowElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Low Elevation" />
      <Text>Hello, world!</Text>
    </React.Fragment>
  ),
  elevation: 'low',
};

export const MediumElevation = Template.bind({});
MediumElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Medium Elevation" />
      <Text>Hello, world!</Text>
    </React.Fragment>
  ),
  elevation: 'medium',
};

export const HighElevation = Template.bind({});
HighElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="High Elevation" />
      <Text>Hello, world!</Text>
    </React.Fragment>
  ),
  elevation: 'high',
};

export const BlockquoteCard = Template.bind({});
BlockquoteCard.args = {
  children: (
    <Blockquote>
      <Text>Hello, world!</Text>
      <Text>This is some sample text!</Text>;
    </Blockquote>
  )
}

export const CodeCard = Template.bind({});
CodeCard.args = {
  children: (
    <Code block>
      {`function foo() {
  console.log('bar');
  console.log('baz');
}`}
    </Code>
  )
}
