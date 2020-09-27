import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardHeader, CardHeaderProps } from '.';
import { Link } from '../Link';

export default {
  title: 'Layout/CardHeader',
  component: CardHeader,
};

const Template: Story<CardHeaderProps> = args => <CardHeader {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: 'My title',
};

export const WithLeftRight = Template.bind({});
WithLeftRight.args = {
  left: <Link href="#">Left</Link>,
  right: <Link color="secondary" href="#">Right</Link>,
  title: 'My title',
};
