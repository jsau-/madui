import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatatableRow, DatatableRowProps } from '.';

export default {
  title: 'Components/Data/Datatable/DatatableRow',
  component: DatatableRow,
} as Meta;

const Template: Story<DatatableRowProps> = args => <DatatableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    foo: 'one',
    bar: 2,
    baz: true,
  },
};
