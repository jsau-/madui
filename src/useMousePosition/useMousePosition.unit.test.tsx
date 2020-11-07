import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useMousePosition } from '.';

const TestComponent = () => {
  const mousePosition = useMousePosition();

  return (
    <div>
      <p data-testid="x">{mousePosition.x}</p>
      <p data-testid="y">{mousePosition.y}</p>
    </div>
  )
}

describe('useMousePosition', () => {
  it('Gets default mouse position', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('x').textContent).toBe('0');
    expect(getByTestId('y').textContent).toBe('0');
  });

  it('Updates on mouse move', () => {
    const newMouseX = 400;
    const newMouseY = 800;

    const { getByTestId } = render(<TestComponent />);

    fireEvent.mouseMove(window, { clientX: newMouseX, clientY: newMouseY });

    expect(getByTestId('x').textContent).toBe(`${newMouseX}`);
    expect(getByTestId('y').textContent).toBe(`${newMouseY}`);
  });
});
