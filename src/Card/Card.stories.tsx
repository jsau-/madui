import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import { CardContent} from '../CardContent';
import { CardHeader} from '../CardHeader';
import { Text } from '../Text';

export default {
  title: 'Components/Surfaces/Card',
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
