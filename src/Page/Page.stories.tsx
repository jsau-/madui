import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Page, PageProps } from '.';
import { Text } from '../Text';

const children = (
  <React.Fragment>
    <Text>Hello, world!</Text>
    <Text>This is some sample text!</Text>
  </React.Fragment>
);

export default {
  title: 'Components/Layout/Page',
  component: Page,
};

const Template: Story<PageProps> = args => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children,
};
