import React from 'react';
import { Link } from '.';
import { render } from '../utils/testingLibary';

const testContent = 'Content!';

describe('<Link />', () => {
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
