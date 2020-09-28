import React from 'react';
import { Overlay } from '.';
import { render } from '../utils/testingLibary';

const testContent = 'content';

describe('<Overlay />', () => {
  it('Renders nothing by default', () => {
    const { queryByText } = render(<Overlay>{testContent}</Overlay>);
    expect(queryByText(testContent)).toBeNull();
  });

  it('Renders children when open', () => {
    const { getByText } = render(<Overlay open>{testContent}</Overlay>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Renders nothing when not open', () => {
    const { queryByText } = render(<Overlay open={false}>{testContent}</Overlay>);
    expect(queryByText(testContent)).toBeNull();
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Overlay
        classes={{ root: 'custom_root' }}
        className="custom_classname"
        open
      >
        {testContent}
      </Overlay>
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
