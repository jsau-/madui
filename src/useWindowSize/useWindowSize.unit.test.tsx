import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useWindowSize } from '.';

const TestComponent = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <p data-testid="x">{windowSize.x}</p>
      <p data-testid="y">{windowSize.y}</p>
    </div>
  )
}

const cachedWindowWidth = window.innerWidth;
const cachedWindowHeight = window.innerHeight;

describe('useWindowSize', () => {
  afterEach(() => {
    Object.assign(window, { innerHeight: cachedWindowWidth });
    Object.assign(window, { innerWidth: cachedWindowHeight });
  });

  it('Gets default window size', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('x').textContent).toBe('0');
    expect(getByTestId('y').textContent).toBe('0');
  });

  it('Updates on window resize', () => {
    const newWidth = 400;
    const newHeight = 800;

    const { getByTestId } = render(<TestComponent />);

    act(() => {
      Object.assign(window, { innerHeight: newHeight });
      Object.assign(window, { innerWidth: newWidth });
    });

    fireEvent(window, new Event('resize'));

    expect(getByTestId('x').textContent).toBe(`${newWidth}`);
    expect(getByTestId('y').textContent).toBe(`${newHeight}`);
  });
});
