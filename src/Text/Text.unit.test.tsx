import React from 'react';
import { Text } from '.';
import { render } from '../util/testing-libary';

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
});
