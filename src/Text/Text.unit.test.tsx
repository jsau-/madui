import React from 'react';
import { Text } from '.';
import { render } from '../util/testingLibary';

const testContent = 'Content!';

describe('<Text />', () => {
  it('Wraps <h1> for headings', () => {
    const { getByText } = render(
      <Text variant="heading">{testContent}</Text>
    );

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('h1');
  });

  it('Wraps <h3> for subheadings', () => {
    const { getByText } = render(
      <Text variant="subheading">{testContent}</Text>
    );

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('h3');
  });

  it('Wraps <p> for body', () => {
    const { getByText } = render(
      <Text variant="body">{testContent}</Text>
    );

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('p');
  });

  it('Wraps <h6> for captions', () => {
    const { getByText } = render(
      <Text variant="caption">{testContent}</Text>
    );

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('h6');
  });

  it('Wraps <p> by default', () => {
    const { getByText } = render(
      <Text>{testContent}</Text>
    );

    const element = getByText(testContent);
    expect(element.tagName.toLowerCase()).toBe('p');
  });

  it('Wraps <b> if bold', () => {
    const { container } = render(
      <Text bold>{testContent}</Text>
    );

    const wrapperElement = container.firstChild;

    if (!(wrapperElement instanceof HTMLElement)) {
      throw new Error('Unexpected child type');
    }

    expect(wrapperElement.tagName.toLowerCase()).toBe('b');
  });

  it('Wraps <i> if italic', () => {
    const { container } = render(
      <Text italic>{testContent}</Text>
    );

    const wrapperElement = container.firstChild;

    if (!(wrapperElement instanceof HTMLElement)) {
      throw new Error('Unexpected child type');
    }

    expect(wrapperElement.tagName.toLowerCase()).toBe('i');
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Text classes={{ root: 'custom_classes'}} className="custom_classname">
        {testContent}
      </Text>
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_classes')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
