import { initials } from '.';

describe('initials', () => {
  it('Returns empty string for empty input', () => {
    expect(initials('')).toBe('');
  });

  it('Returns empty string for whitespace', () => {
    expect(initials(' ')).toBe('');
  });

  it('Handles two-word names', () => {
    expect(initials('Foo Bar')).toBe('FB');
  });

  it('Handles multi-word names', () => {
    expect(initials('1name 2name 3name 4name 5name')).toBe('15');
  });

  it('Capitalizes inputs', () => {
    expect(initials('foo bar')).toBe('FB');
  });
});
