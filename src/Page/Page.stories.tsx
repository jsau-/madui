import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Page, PageProps } from '.';
import { Text } from '../Text';
import { usePage } from '../usePage';

const ChildComponent = () => {
  const pageContext = usePage();

  return (
    <div>
      <Text>Hello, world!</Text>
      <Text>This is some sample text!</Text>
      <button onClick={pageContext.navbar.toggle}>Toggle navbar</button>
      <button onClick={pageContext.sidebar.toggle}>Toggle sidebar</button>
      <button onClick={pageContext.footer.toggle}>Toggle footer</button>
    </div>
  );
}

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
