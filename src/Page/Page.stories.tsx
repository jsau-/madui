import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Page, PageProps } from '.';
import { Button } from '../Button';
import { Text } from '../Text';
import { usePage } from '../usePage';

const ChildComponent = () => {
  const pageContext = usePage();

  return (
    <div>
      <Text>Hello, world!</Text>
      <Text>This is some sample text!</Text>
      <Button onClick={pageContext.navbar.toggle}>Toggle navbar</Button>
      <Button onClick={pageContext.sidebar.toggle}>Toggle sidebar</Button>
      <Button onClick={pageContext.footer.toggle}>Toggle footer</Button>
    </div>
  );
};

export default {
  title: 'Components/Layout/Page',
  component: Page,
};

const Template: Story<PageProps> = args => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <ChildComponent />,
  footer: <Text>Footer</Text>,
  navbar: <Text>Navbar</Text>,
  sidebar: <Text>Sidebar</Text>,
};
