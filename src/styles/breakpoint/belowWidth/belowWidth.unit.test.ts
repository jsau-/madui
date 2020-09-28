import { belowWidth } from '.';

describe('belowWidth', () => {
  it('Defaults to pixel units', () => {
    expect(/.*px/.test(belowWidth(0))).toBe(true);
  });

  it('Does not allow negative units by default', () => {
    expect(belowWidth(0)).toBe('@media (max-width: 0px)');
  });

  it('Sets breakpoint at one pixel below the provided width', () => {
    const width = 100;
    expect(belowWidth(width)).toBe(`@media (max-width: ${width - 1}px)`);
  });

  it('Uses provided display unit', () => {
    expect(/.*rem/.test(belowWidth(0, 'rem'))).toBe(true);
  });

  it('Allows explicity setting negative units', () => {
    expect(belowWidth(0, 'px', true)).toBe('@media (max-width: -1px)');
  });
});
