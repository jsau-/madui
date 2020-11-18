import { isSSR } from '.';

const cachedWindow = window;

describe('isSSR', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-global-assign
    (window as any) = undefined;
  });

  afterEach(() => {
    // eslint-disable-next-line no-global-assign
    window = cachedWindow;
  });

  it('Returns true if window is not defined', () => {
    expect(isSSR()).toBe(true);
  });

  it('Returns false if window is defined', () => {
    // eslint-disable-next-line no-global-assign
    window = cachedWindow;
    expect(isSSR()).toBe(false);
  });
});
