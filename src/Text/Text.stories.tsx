import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Components/Text/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  children: 'My sample text.',
  variant: 'heading',
};

export const Subheading = Template.bind({});
Subheading.args = {
  children: 'My sample text.',
  variant: 'subheading',
};

export const Body = Template.bind({});
Body.args = {
  children: 'My sample text.',
  variant: 'body',
};

export const BoldBody = Template.bind({});
BoldBody.args = {
  bold: true,
  children: 'My sample text.',
  variant: 'body',
};

export const ItalicBody = Template.bind({});
ItalicBody.args = {
  children: 'My sample text.',
  italic: true,
  variant: 'body',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'My sample text.',
  variant: 'caption',
};

export const InheritColor = Template.bind({});
InheritColor.args = {
  children: 'My sample text.',
  inheritColor: true,
};
