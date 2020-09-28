import React from 'react';
import { CardHeader } from '.';
import { render } from '../utils/testingLibary';

describe('<CardHeader />', () => {
  it('Renders title', () => {
    const title = 'title';
    const { getByText } = render(<CardHeader title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  it('Renders left and right elements', () => {
    const left = 'left';
    const right = 'right';

    const { getByText } = render(
      <CardHeader
        left={left}
        right={right}
      />
    );

    expect(getByText(left)).toBeTruthy();
    expect(getByText(right)).toBeTruthy();
  });

  it('Uses provided class names', () => {
    const title = 'title';
    const left = 'left';
    const right = 'right';

    const { container, getByText } = render(
      <CardHeader
        classes={{
          left: 'custom_left',
          right: 'custom_right',
          root: 'custom_root',
          title: 'custom_title',
        }}
        className="custom_classname"
        left={left}
        right={right}
        title={title}
      />
    );

    const rootElement = container.firstChild;
    const leftElement = getByText(left);
    const rightElement = getByText(right);

    if (
      !(rootElement instanceof HTMLElement) ||
      !(leftElement instanceof HTMLElement) ||
      !(rightElement instanceof HTMLElement)
    ) {
      throw new Error('Unexpected element types');
    }

    expect(rootElement.classList.contains('custom_root')).toBe(true);
    expect(rootElement.classList.contains('custom_classname')).toBe(true);

    expect(leftElement.classList.contains('custom_left')).toBe(true);

    expect(rightElement.classList.contains('custom_right')).toBe(true);

    const titleElement = rootElement.children[1];

    if (!(titleElement instanceof HTMLElement)) {
      throw new Error('Unexpected element types');
    }

    expect(titleElement.classList.contains('custom_title')).toBe(true);
  });
});
