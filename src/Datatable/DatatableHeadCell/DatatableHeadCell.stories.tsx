import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatatableHeadCell, DatatableHeadCellProps } from '.';

export default {
  title: 'Components/Data/Datatable/DatatableHeadCell',
  component: DatatableHeadCell,
} as Meta;

const Template: Story<DatatableHeadCellProps> = args => (
  <DatatableHeadCell {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Foo',
};

export const Ascending = Template.bind({});
Ascending.args = {
  children: 'Foo',
  onChangeSort: sort => console.log(sort),
  sort: 'ascending',
};

export const Descending = Template.bind({});
Descending.args = {
  children: 'Foo',
  onChangeSort: sort => console.log(sort),
  sort: 'descending',
};
