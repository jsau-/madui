import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardActions, CardActionsProps } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Surfaces/CardActions',
  component: CardActions,
} as Meta;

const Template: Story<CardActionsProps> = args => <CardActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Button>Hello, world!</Button>,
};
