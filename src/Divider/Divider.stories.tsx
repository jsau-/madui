import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Divider, DividerProps } from '.';

export default {
  title: 'Components/Layout/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

export const Default = Template.bind({});
