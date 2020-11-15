import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Column, ColumnProps } from '.';
import { Columns } from '../Columns';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Column',
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = args => <Columns><Column {...args} style={{ backgroundColor: 'magenta' }} /></Columns>;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Hello!</Text>,
};
