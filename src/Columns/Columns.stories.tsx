import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Columns, ColumnsProps } from '.';
import { Column } from '../Column';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Columns',
  component: Columns,
} as Meta;

const Template: Story<ColumnsProps> = args => <Columns {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <Column xs={1} lg={3} xl={4} style={{ backgroundColor: 'magenta' }}><Text>Left</Text></Column>
      <Column xs={10} lg={6} xl={4} style={{ backgroundColor: 'blue' }}><Text>Middle</Text></Column>
      <Column xs={1} lg={3} xl={4} style={{ backgroundColor: 'magenta' }}><Text>Right</Text></Column>
    </React.Fragment>
  ),
};
