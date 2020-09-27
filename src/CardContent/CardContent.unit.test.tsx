import React from 'react';
import { CardContent } from '.';
import { render } from '../util/testingLibary';

const testContent = 'content';

describe('<CardContent />', () => {
  it('Renders content', () => {
    const { getByText } = render(<CardContent>{testContent}</CardContent>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <CardContent
        classes={{ root: 'custom_root' }}
        className="custom_classname"
      >
        {testContent}
      </CardContent>
    );

    const element = getByText(testContent);
    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
