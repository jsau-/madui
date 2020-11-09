import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardHeader, CardHeaderProps } from '.';

export default {
  title: 'Components/Layout/CardHeader',
  component: CardHeader,
} as Meta;

const Template: Story<CardHeaderProps> = args => <CardHeader {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: 'My title',
};

export const WithLeftRight = Template.bind({});
WithLeftRight.args = {
  left: <a href="#">Left</a>,
  right: <a color="secondary" href="#">Right</a>,
  title: 'My title',
};
