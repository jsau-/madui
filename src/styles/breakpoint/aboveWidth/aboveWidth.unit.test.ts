import { aboveWidth } from '.';

describe('aboveWidth', () => {
  it('Defaults to pixels if unit not specified', () => {
    expect(/.*px/.test(aboveWidth(0))).toBe(true);
  });

  it('Uses provided unit', () => {
    expect(/.*rem/.test(aboveWidth(0, 'rem'))).toBe(true);
  });

  it('Generates media query for above a width', () => {
    const width = 100;
    expect(aboveWidth(width)).toBe(`@media (min-width: ${width}px)`);
  });
});
