import React from 'react';
import { Check } from 'react-feather';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Datatable, DatatableProps } from '.';
import { Icon } from '../../Icon';

export default {
  title: 'Components/Data/Datatable/Datatable',
  component: Datatable,
} as Meta;

const Template: Story<DatatableProps<{
  foo: string;
  bar: number;
  baz: boolean;
}>> = args => <Datatable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columnOptions: {
    foo: {},
    bar: {
      hide: true,
    },
    baz: {
      customRenderer: (data) => (
        <Icon color={data ? 'primary' : 'grey'}>
          <Check />
        </Icon>
      ),
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
