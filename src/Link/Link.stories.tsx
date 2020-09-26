import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '.';

export default {
  title: 'Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link text',
  color: 'primary',
  href: '#',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link text',
  color: 'secondary',
  href: '#',
};

export const Heading = Template.bind({});
Heading.args = {
  children: 'Link text',
  href: '#',
  variant: 'heading',
};

export const Subheading = Template.bind({});
Subheading.args = {
  children: 'Link text',
  href: '#',
  variant: 'subheading',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Link text',
  href: '#',
  variant: 'caption',
};
