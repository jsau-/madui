import React from 'react';
import { Check } from 'react-feather';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Datatable, DatatableProps } from '.';
import { Card } from '../../Card';
import { Icon } from '../../Icon';
import { DatatableCellData } from '../../types/DatatableCellData';

export default {
  title: 'Components/Data/Datatable/Datatable',
  component: Datatable,
} as Meta;

const CardTemplate: Story<DatatableProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => <Card><Datatable {...args} /></Card>;

const Template: Story<DatatableProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => <Datatable {...args} />;

const columnOptions = {
  foo: {},
  bar: {
    hide: true,
  },
  baz: {
    customRenderer: (data: DatatableCellData) => (
      <Icon color={data ? 'primary' : 'grey'}>
        <Check />
      </Icon>
    ),
  },
};

const data = [
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
];

export const Default = Template.bind({});
Default.args = {
  columnOptions,
  data,
};

export const CardDatatable = CardTemplate.bind({});
CardDatatable.args = {
  columnOptions,
  data,
};
