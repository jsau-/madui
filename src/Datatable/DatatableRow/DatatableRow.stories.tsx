import React from 'react';
import { Check } from 'react-feather';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatatableRow, DatatableRowProps } from '.';
import { Icon } from '../../Icon';

export default {
  title: 'Components/Data/Datatable/DatatableRow',
  component: DatatableRow,
} as Meta;

const Template: Story<DatatableRowProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => <DatatableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  columnOptions: {
    foo: {},
    bar: {
      align: 'right',
      hide: true,
    },
    baz: {
      align: 'right',
      customRenderer: (data) => (
        <Icon color={data ? 'primary' : 'grey'}>
          <Check />
        </Icon>
      ),
    },
  },
  data: {
    foo: 'one',
    bar: 2,
    baz: true,
  },
};
