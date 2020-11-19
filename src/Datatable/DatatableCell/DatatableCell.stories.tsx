import React from 'react';
import { Check } from 'react-feather';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatatableCell, DatatableCellProps } from '.';
import { Icon } from '../../Icon';

export default {
  title: 'Components/Data/Datatable/DatatableCell',
  component: DatatableCell,
} as Meta;

const StringTemplate: Story<DatatableCellProps<string>> = args => (
  <DatatableCell {...args} />
);
const NumberTemplate: Story<DatatableCellProps<number>> = args => (
  <DatatableCell {...args} />
);
const BooleanTemplate: Story<DatatableCellProps<boolean>> = args => (
  <DatatableCell {...args} />
);

export const String = StringTemplate.bind({});
String.args = {
  data: 'Hello, world!',
};
export const StringWithCustomRenderer = StringTemplate.bind({});
StringWithCustomRenderer.args = {
  customRenderer: data => `Custom: ${data}`,
  data: 'Hello, world!',
};

export const Number = NumberTemplate.bind({});
Number.args = {
  data: 10,
};

export const Boolean = BooleanTemplate.bind({});
Boolean.args = {
  data: false,
};

export const BooleanWithDefaults = BooleanTemplate.bind({});
BooleanWithDefaults.args = {
  data: false,
  false: (
    <Icon height={24} width={24}>
      <Check />
    </Icon>
  ),
  true: (
    <Icon color="primary" height={24} width={24}>
      <Check />
    </Icon>
  ),
};

export const BooleanWithCustomRender = BooleanTemplate.bind({});
BooleanWithCustomRender.args = {
  customRenderer: data => (data ? 'Wow, true!' : 'Shucks, false...'),
  data: true,
};
