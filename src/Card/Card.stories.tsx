import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import { Blockquote } from '../Blockquote';
import { CardContent} from '../CardContent';
import { CardHeader} from '../CardHeader';
import { Code } from '../Code';
import { Divider } from '../Divider';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const LowElevation = Template.bind({});
LowElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Low Elevation" />
      <CardContent><Text>Hello, world!</Text></CardContent>
    </React.Fragment>
  ),
  elevation: 'low',
};

export const MediumElevation = Template.bind({});
MediumElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Medium Elevation" />
      <CardContent><Text>Hello, world!</Text></CardContent>
    </React.Fragment>
  ),
  elevation: 'medium',
};

export const HighElevation = Template.bind({});
HighElevation.args = {
  children: (
    <React.Fragment>
      <CardHeader title="High Elevation" />
      <CardContent><Text>Hello, world!</Text></CardContent>
    </React.Fragment>
  ),
  elevation: 'high',
};

export const BlockquoteCard = Template.bind({});
BlockquoteCard.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Blockquote" />
      <Blockquote>
        <Text>Hello, world!</Text>
        <Text>This is some sample text!</Text>;
      </Blockquote>
    </React.Fragment>
  )
}

export const CodeCard = Template.bind({});
CodeCard.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Code" />
      <Code block>
        {`function foo() {
  console.log('bar');
  console.log('baz');
}`}
      </Code>
    </React.Fragment>
  )
}

export const DividedCard = Template.bind({});
DividedCard.args = {
  children: (
    <React.Fragment>
      <CardHeader title="Divided" />
      <Divider />
      <CardContent><Text>Hello, world!</Text></CardContent>
    </React.Fragment>
  ),
}
