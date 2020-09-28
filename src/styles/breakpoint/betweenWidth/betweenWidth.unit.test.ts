import { betweenWidth } from '.';

describe('betweenWidth', () => {
  it('Uses px by default', () => {
    const regex = /@media \(min-width: \d+px and max-width: \d+px\)/;
    expect(regex.test(betweenWidth(0, 1))).toBe(true);
  });

  it('Generates a media query for between two widths', () => {
    const min = 1;
    const max = 100;

    const mediaQuery = betweenWidth(min, max);

    expect(mediaQuery).toBe(`@media (min-width: ${min}px and max-width: ${max}px)`);
  });

  it('Uses provided display unit', () => {
    const min = 1;
    const max = 100;
    const unit = 'rem';

    const mediaQuery = betweenWidth(min, max, unit);

    expect(mediaQuery).toBe(`@media (min-width: ${min}${unit} and max-width: ${max}${unit})`);
  });
});
