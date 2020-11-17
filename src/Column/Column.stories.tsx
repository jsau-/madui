import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Column, ColumnProps } from '.';
import { Columns } from '../Columns';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Column',
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = args => (
  <Columns>
    <Column {...args} style={{ backgroundColor: 'magenta' }}>
      <Text>Hello!</Text>
    </Column>
  </Columns>
);

export const Default = Template.bind({});
Default.args = {};

export const Sm6 = Template.bind({});
Sm6.args = {
  sm: 6,
};

export const Md6 = Template.bind({});
Md6.args = {
  md: 6,
};

export const Lg6 = Template.bind({});
Lg6.args = {
  lg: 6,
};

export const Xl6 = Template.bind({});
Xl6.args = {
  xl: 6,
};

export const Xxl6 = Template.bind({});
Xxl6.args = {
  xxl: 6,
};
