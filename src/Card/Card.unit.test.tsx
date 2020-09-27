import React from 'react';
import { Card } from './Card';
import { render } from '../util/testing-libary';

const testContent = 'Content!';

describe('<Card />', () => {
  it('Renders provided content', () => {
    const { getByText } = render(<Card>{testContent}</Card>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('Defaults to low elevation', () => {
    const { getByText } = render(<Card>{testContent}</Card>);
    const element = getByText(testContent);
    expect(element.classList.contains('low')).toBe(true);
  });

  it('Uses provided class names', () => {
    const { getByText } = render(
      <Card
        classes={{ root: 'custom_root' }}
        className="custom_classname"
      >
        {testContent}
      </Card>
    );
    const element = getByText(testContent);
    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
