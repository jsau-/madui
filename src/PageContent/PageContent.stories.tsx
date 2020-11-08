import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { PageContent, PageContentProps } from '.';
import { Text } from '../Text';

const children = (
  <React.Fragment>
    <Text>Hello, world!</Text>
    <Text>This is some sample text!</Text>
  </React.Fragment>
);

export default {
  title: 'Components/Layout/PageContent',
  component: PageContent,
};

const Template: Story<PageContentProps> = args => <PageContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children,
};
