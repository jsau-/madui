import { clamp } from '.';

describe('clamp', () => {
  it('Returns value when within bounds', () => {
    expect(clamp(10, 0, 20)).toBe(10);
  })

  it('Returns max value when above bounds', () => {
    expect(clamp(10, 0, 1)).toBe(1);
  })

  it('Returns min value when below bounds', () => {
    expect(clamp(-1, 0, 1)).toBe(0);
  });
});
