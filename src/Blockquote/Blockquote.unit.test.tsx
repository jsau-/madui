import React from 'react';
import { Blockquote } from '.';
import { render } from '../util/testing-libary';

const testContent = 'Content!';

describe('<Blockquote />', () => {
  it('Renders children', () => {
    const { getByText } = render(<Blockquote>{testContent}</Blockquote>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Spreads <blockquote /> props', () => {
    const cite = 'https://example.com';

    const { getByText } = render(
      <Blockquote cite={cite}>
        {testContent}
      </Blockquote>
    );

    const element = getByText(testContent);

    expect(element.getAttribute('cite')).toBe(cite);
  });

  it('Defaults to primary color', () => {
    const { getByText } = render(<Blockquote>{testContent}</Blockquote>);
    const element = getByText(testContent);
    expect(element.classList.contains('primary')).toBe(true);
  });

  it('Uses provided color', () => {
    const { getByText } = render(
      <Blockquote borderColor="none">
        {testContent}
      </Blockquote>
    );

    const element = getByText(testContent);
    expect(element.classList.contains('none')).toBe(true);
  });

  it('Uses provided classnames', () => {
    const { getByText } = render(
      <Blockquote
        classes={{ root: 'custom_root' }}
        className="custom_classname"
      >
        {testContent}
      </Blockquote>
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
