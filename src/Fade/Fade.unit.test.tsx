import React from 'react';
import { Fade } from '.';
import { render } from '../utils/testingLibary';

const testContent = 'content';

describe('<Fade />', () => {
  it('Renders nothing by default', () => {
    const { queryByText } = render(<Fade>{testContent}</Fade>);
    expect(queryByText(testContent)).toBeNull();
  });

  it('Renders children when showing', () => {
    const { getByText } = render(<Fade show>{testContent}</Fade>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Renders nothing when not visible', () => {
    const { queryByText } = render(<Fade show={false}>{testContent}</Fade>);

    expect(queryByText(testContent)).toBeNull();
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Fade
        classes={{
          fadeIn: 'custom_fadein',
          root: 'custom_root',
        }}
        className="custom_classname"
        show
      >
        {testContent}
      </Fade>,
    );

    const element = getByText(testContent);

    expect(element.classList.contains('custom_fadein')).toBe(true);
    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
