import React from 'react';
import { Divider } from '.';
import { render } from '../util/testingLibary';

describe('<Divider />', () => {
  it('Has role separator', () => {
    const { getByRole } = render(<Divider />);
    expect(getByRole('separator')).toBeTruthy();
  });

  it('Uses provided classnames', () => {
    const { getByRole } = render(
      <Divider
        classes={{ root: 'custom_root' }}
        className="custom_classname"
      />
    );

    const element = getByRole('separator');

    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);
  });
});
