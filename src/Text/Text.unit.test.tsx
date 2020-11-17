import React from 'react';
import { Text } from '.';
import { render } from '../utils/testingLibary';

const testContent = 'Content!';

describe('<Text />', () => {
  it('Wraps <p> by default', () => {
    const { getByText } = render(<Text>{testContent}</Text>);

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('p');
  });

  it('Wraps <b> if bold', () => {
    const { container } = render(<Text bold>{testContent}</Text>);

    const wrapperElement = container.firstChild;

    if (!(wrapperElement instanceof HTMLElement)) {
      throw new Error('Unexpected child type');
    }

    expect(wrapperElement.tagName.toLowerCase()).toBe('b');
  });

  it('Wraps <i> if italic', () => {
    const { container } = render(<Text italic>{testContent}</Text>);

    const wrapperElement = container.firstChild;

    if (!(wrapperElement instanceof HTMLElement)) {
      throw new Error('Unexpected child type');
    }

    expect(wrapperElement.tagName.toLowerCase()).toBe('i');
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Text classes={{ root: 'custom_classes' }} className="custom_classname">
        {testContent}
      </Text>,
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_classes')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
