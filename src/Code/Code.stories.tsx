import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Code, CodeProps } from '.';

export default {
  title: 'Code',
  component: Code,
} as Meta;

const Template: Story<CodeProps> = args => <Code {...args} />;

export const BlockPrimary = Template.bind({});
BlockPrimary.args = {
  block: true,
  children: `function foo() {
  console.log('bar');
  console.log('baz');
}`,
};

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  children: `function foo() {
  console.log('bar');
  console.log('baz');
}`,
};

export const BlockSecondary = Template.bind({});
BlockSecondary.args = {
  block: true,
  children: `function foo() {
  console.log('bar');
  console.log('baz');
}`,
  color: 'secondary',
};

export const DefaultSecondary = Template.bind({});
DefaultSecondary.args = {
  children: `function foo() {
  console.log('bar');
  console.log('baz');
}`,
  color: 'secondary',
};
