import { isSSR } from '.';

const cachedWindow = window;

describe('isSSR', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any) = undefined;
  });

  afterEach(() => {
    window = cachedWindow;
  });

  it('Returns true if window is not defined', () => {
    expect(isSSR()).toBe(true);
  });

  it('Returns false if window is defined', () => {
    window = cachedWindow;
    expect(isSSR()).toBe(false);
  });
});
