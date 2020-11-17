import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table, TableProps } from '.';
import { Card } from '../Card';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';
import { TableHeadCell } from '../TableHeadCell';
import { TableRow } from '../TableRow';

export default {
  title: 'Components/Data/Table',
  component: Table,
} as Meta;

const CardTemplate: Story<TableProps> = args => (
  <Card>
    <Table {...args} />
  </Card>
);
const Template: Story<TableProps> = args => <Table {...args} />;

const children = (
  <React.Fragment>
    <TableHead>
      <TableRow>
        <TableHeadCell>Foo</TableHeadCell>
        <TableHeadCell align="right">Bar</TableHeadCell>
        <TableHeadCell align="right">Baz</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>foo one</TableCell>
        <TableCell align="right">bar one</TableCell>
        <TableCell align="right">baz one</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>foo two</TableCell>
        <TableCell align="right">bar two</TableCell>
        <TableCell align="right">baz two</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>foo three</TableCell>
        <TableCell align="right">bar three</TableCell>
        <TableCell align="right">baz three</TableCell>
      </TableRow>
    </TableBody>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  children,
};

export const CardTable = CardTemplate.bind({});
CardTable.args = {
  children,
};
