import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardHeader, CardHeaderProps } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Surfaces/CardHeader',
  component: CardHeader,
} as Meta;

const Template: Story<CardHeaderProps> = args => <CardHeader {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: 'My title',
};

export const WithLeftRight = Template.bind({});
WithLeftRight.args = {
  left: <Button>Left</Button>,
  right: <Button>Right</Button>,
  title: 'My title',
};
