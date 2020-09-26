import React from 'react';
import { Code } from '.';
import { render } from '../util/testing-libary';

const testContent = 'Content!';

describe('<Code />', () => {
  it('Renders provided content', () => {
    const { getByText } = render(<Code>{testContent}</Code>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Uses provided class names', () => {
    const { container, getByText } = render(
      <Code
        classes={{
          code: 'custom_code',
          root: 'custom_root',
        }}
        className="custom_classname"
      >
        {testContent}
      </Code>
    );

    const parentElement = container.firstChild;

    if (!(parentElement instanceof HTMLElement)) {
      throw new Error('Unexpected parent element type');
    }

    expect(parentElement.classList.contains('custom_root')).toBe(true);
    expect(parentElement.classList.contains('custom_classname')).toBe(true);

    const codeElement = getByText(testContent);

    expect(codeElement.classList.contains('custom_code')).toBe(true);
  });
});
