import { isPointWithinTriangle } from '.';

describe('isPointWithinTriangle', () => {
  it('Handles points inside triangle', () => {
    const point = { x: 1, y: 1 };

    const triPointOne = { x: 0, y: 0 };
    const trPointTwo = { x: 100, y: 100 };
    const triPointThree = { x: 100, y: 0 };

    expect(
      isPointWithinTriangle(point, triPointOne, trPointTwo, triPointThree),
    ).toBe(true);
  });

  it('Handles negative coordinates', () => {
    const point = { x: -1, y: -1 };

    const triPointOne = { x: 0, y: 0 };
    const trPointTwo = { x: -100, y: -100 };
    const triPointThree = { x: -100, y: 0 };

    expect(
      isPointWithinTriangle(point, triPointOne, trPointTwo, triPointThree),
    ).toBe(true);
  });

  it('Handles points outside triangle', () => {
    const point = { x: -1, y: -1 };

    const triPointOne = { x: 0, y: 0 };
    const trPointTwo = { x: 1, y: 1 };
    const triPointThree = { x: 1, y: 0 };

    expect(
      isPointWithinTriangle(point, triPointOne, trPointTwo, triPointThree),
    ).toBe(false);
  });

  it('Excludes points on triangle edge', () => {
    const point = { x: 0, y: 0 };

    const triPointOne = { x: 0, y: 0 };
    const trPointTwo = { x: 1, y: 1 };
    const triPointThree = { x: 1, y: 0 };

    expect(
      isPointWithinTriangle(point, triPointOne, trPointTwo, triPointThree),
    ).toBe(false);
  });
});
