import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  adjacents: 2,
  color: 'primary',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const Grey = Template.bind({});
Grey.args = {
  adjacents: 2,
  color: 'grey',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const Warning = Template.bind({});
Warning.args = {
  adjacents: 2,
  color: 'warning',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const Error = Template.bind({});
Error.args = {
  adjacents: 2,
  color: 'error',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const Success = Template.bind({});
Success.args = {
  adjacents: 2,
  color: 'success',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const WithCustomNextAndPrevious = Template.bind({});
WithCustomNextAndPrevious.args = {
  next: 'Custom Next!',
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  previous: 'Custom Previous!',
  totalPages: 10,
};

export const WithAdjacentsAtStart = Template.bind({});
WithAdjacentsAtStart.args = {
  adjacents: 2,
  onChangePage: (newPage) => console.log('New page!', newPage),
  totalPages: 10,
};

export const WithAdjacentsInMiddle = Template.bind({});
WithAdjacentsInMiddle.args = {
  adjacents: 2,
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};

export const WithAdjacentsAtEnd = Template.bind({});
WithAdjacentsAtEnd.args = {
  adjacents: 2,
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 9,
  totalPages: 10,
};

export const WithCustomLabels = Template.bind({});
WithCustomLabels.args = {
  adjacents: 100,
  getPageLabel: (pageIndex) => `Page ${pageIndex + 1}`,
  onChangePage: (newPage) => console.log('New page!', newPage),
  page: 5,
  totalPages: 10,
};
