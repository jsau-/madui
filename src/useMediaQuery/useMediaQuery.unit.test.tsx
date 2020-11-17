import React from 'react';
import { useMediaQuery } from '.';
import { render } from '../utils/testingLibary';

const windowMatchMedia = window.matchMedia;

const createMockMatchMedia = (shouldPass: boolean) =>
  jest.fn().mockImplementation(query => ({
    matches: shouldPass,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

describe('useMediaQuery', () => {
  beforeEach(() => {
    /*
     * NB: Need to explicitly cast window to any to allow overwriting
     * properties that _should_ be defined
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).matchMedia = undefined;
  });

  afterEach(() => {
    window.matchMedia = windowMatchMedia;
  });

  it('Returns false for no match media function', () => {
    expect(typeof window.matchMedia).toBe('undefined');

    const Test = () => {
      const matchesMediaQuery = useMediaQuery('@media (min-width: 0px)');
      return <p>{`Matches: ${matchesMediaQuery}`}</p>;
    };

    const { getByText } = render(<Test />);

    expect(getByText('Matches: false')).toBeTruthy();
  });

  it('Sets match using window.matchMedia', () => {
    window.matchMedia = createMockMatchMedia(true);

    const Test = () => {
      const matchesMediaQuery = useMediaQuery('@media (min-width: 0px)');
      return <p>{`Matches: ${matchesMediaQuery}`}</p>;
    };

    const { getByText } = render(<Test />);

    expect(window.matchMedia).toHaveBeenCalled();
    expect(getByText('Matches: true')).toBeTruthy();
  });

  it('Sets not match using window.matchMedia', () => {
    window.matchMedia = createMockMatchMedia(false);

    const Test = () => {
      const matchesMediaQuery = useMediaQuery('@media (min-width: 0px)');
      return <p>{`Matches: ${matchesMediaQuery}`}</p>;
    };

    const { getByText } = render(<Test />);

    expect(window.matchMedia).toHaveBeenCalled();
    expect(getByText('Matches: false')).toBeTruthy();
  });

  it('Sets match using customMatchMedia', () => {
    window.matchMedia = createMockMatchMedia(false);
    const customMatchMedia = createMockMatchMedia(true);

    const Test = () => {
      const matchesMediaQuery = useMediaQuery(
        '@media (min-width: 0px)',
        customMatchMedia,
      );

      return <p>{`Matches: ${matchesMediaQuery}`}</p>;
    };

    const { getByText } = render(<Test />);

    expect(window.matchMedia).toHaveBeenCalledTimes(0);
    expect(customMatchMedia).toHaveBeenCalled();
    expect(getByText('Matches: true')).toBeTruthy();
  });

  it('Sets not match using customMatchMedia', () => {
    window.matchMedia = createMockMatchMedia(true);
    const customMatchMedia = createMockMatchMedia(false);

    const Test = () => {
      const matchesMediaQuery = useMediaQuery(
        '@media (min-width: 0px)',
        customMatchMedia,
      );

      return <p>{`Matches: ${matchesMediaQuery}`}</p>;
    };

    const { getByText } = render(<Test />);

    expect(window.matchMedia).toHaveBeenCalledTimes(0);
    expect(customMatchMedia).toHaveBeenCalled();
    expect(getByText('Matches: false')).toBeTruthy();
  });
});
