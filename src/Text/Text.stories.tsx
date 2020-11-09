import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';
import { TextVariant } from 'src/types/TextVariant';

export default {
  title: 'Components/Text/Text',
  component: Text,
} as Meta;

const allVariants: TextVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'];

const AllTemplate: Story = () => (
  <React.Fragment>
    {allVariants.map((variant) => (
      <Text key={variant} variant={variant}>{variant}</Text>
    ))}
  </React.Fragment>
);

const TextTemplate: Story<TextProps> = args => <Text {...args} />;

export const All = AllTemplate.bind({});

export const H1 = TextTemplate.bind({});
H1.args = {
  children: 'My sample text.',
  variant: 'h1',
};

export const H2 = TextTemplate.bind({});
H2.args = {
  children: 'My sample text.',
  variant: 'h2',
};

export const H3 = TextTemplate.bind({});
H3.args = {
  children: 'My sample text.',
  variant: 'h3',
};

export const H4 = TextTemplate.bind({});
H4.args = {
  children: 'My sample text.',
  variant: 'h4',
};

export const H5 = TextTemplate.bind({});
H5.args = {
  children: 'My sample text.',
  variant: 'h5',
};

export const H6 = TextTemplate.bind({});
H6.args = {
  children: 'My sample text.',
  variant: 'h6',
};

export const Body1 = TextTemplate.bind({});
Body1.args = {
  children: 'My sample text.',
  variant: 'body1',
};

export const Body2 = TextTemplate.bind({});
Body2.args = {
  children: 'My sample text.',
  variant: 'body2',
};

export const Caption = TextTemplate.bind({});
Caption.args = {
  children: 'My sample text.',
  variant: 'caption',
};
