import { mocked } from 'ts-jest/utils';
import React from 'react';
import { Link } from '.';
import { Text } from '../Text';
import { render } from '../util/testing-libary';

jest.mock(
  '../Text',
  () => ({
    Text: jest.fn(({ children }) => children)
  }),
);

const mockedText = mocked(Text, true);

const testContent = 'Content!';

describe('<Link />', () => {
  it('Renders a <Text /> component', () => {
    render(
      <Link>
        {testContent}
      </Link>
    );

    expect(mockedText).toHaveBeenCalledTimes(1);

    expect(mockedText.mock.calls[0]).toEqual([
      {
        children: testContent,
        inheritColor: true,
        variant: undefined,
      },
      expect.any(Object),
    ]);
  });

  it('Passes provided variant to <Text />', () => {
    render(
      <Link variant="heading">
        {testContent}
      </Link>
    );

    expect(mockedText).toHaveBeenCalledTimes(1);

    expect(mockedText.mock.calls[0]).toEqual([
      {
        children: testContent,
        inheritColor: true,
        variant: 'heading',
      },
      expect.any(Object),
    ]);
  });

  it('Spreads relevant anchor properties', () => {
    const { container } = render(<Link download href="#">{testContent}</Link>);
    const anchor = container.firstChild;

    if (!(anchor instanceof HTMLAnchorElement)) {
      throw new Error('Unexpected anchor type');
    }

    expect(anchor.hasAttribute('download')).toBe(true);
    expect(anchor.getAttribute('href')).toBe('#');
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Link classes={{ root: 'custom_classes'}} className="custom_classname">
        {testContent}
      </Link>
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_classes')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});