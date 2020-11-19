import React from 'react';
import { Check } from 'react-feather';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Datatable, DatatableProps } from './Datatable';
import { Card } from '../Card';
import { Icon } from '../Icon';

export default {
  title: 'Components/Data/Datatable/Datatable',
  component: Datatable,
} as Meta;

const CardTemplate: Story<DatatableProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => (
  <Card>
    <Datatable {...args} />
  </Card>
);

const CheckIcon = (data: boolean) => (
  <Icon color={data ? 'primary' : 'grey'} height={24} width={24}>
    <Check />
  </Icon>
);

const Template: Story<DatatableProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => <Datatable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columnOptions: {
    foo: {
      sort: true,
    },
    bar: {
      align: 'right',
      hide: true,
    },
    baz: {
      align: 'right',
      customRenderer: CheckIcon,
    },
  },
  data: [
    {
      foo: 'one',
      bar: 2,
      baz: true,
    },
    {
      foo: 'three',
      bar: 4,
      baz: true,
    },
  ],
  onChangeSort: (column, sort) => console.log('Sorting by', column, sort),
  sort: {
    column: 'foo',
    direction: 'ascending',
  },
};

export const CardDatatable = CardTemplate.bind({});
CardDatatable.args = {
  columnOptions: {
    foo: {},
    bar: {
      align: 'right',
      hide: true,
    },
    baz: {
      align: 'right',
      customRenderer: CheckIcon,
    },
  },
  data: [
    {
      foo: 'one',
      bar: 2,
      baz: true,
    },
    {
      foo: 'three',
      bar: 4,
      baz: true,
    },
  ],
};
