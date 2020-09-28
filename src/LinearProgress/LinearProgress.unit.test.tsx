import React from 'react';
import { LinearProgress } from '.';
import { render } from '../utils/testingLibary';

describe('<LinearProgress />', () => {
  it('Offsets progress bar according to completion', () => {
    const { getByRole } = render(
      <LinearProgress min={90} max={100} value={92} />
    );

    const element = getByRole('progressbar');

    const progressElement = element.children[1];

    if (!(progressElement instanceof HTMLElement)) {
      throw new Error('Unexpected typeof progress element');
    }

    expect(progressElement.style.transform).toBe('translateX(-80%)');
  });

  it('Sets aria properties for progress', () => {
    const { getByRole } = render(
      <LinearProgress min={90} max={100} value={92} />
    );

    const element = getByRole('progressbar');

    expect(element.getAttribute('aria-valuemax')).toBe("100");
    expect(element.getAttribute('aria-valuemin')).toBe("90");
    expect(element.getAttribute('aria-valuenow')).toBe("92");
  });

  it('Defaults to no progress out of 100', () => {
    const { getByRole } = render(
      <LinearProgress />
    );

    const element = getByRole('progressbar');

    expect(element.getAttribute('aria-valuemax')).toBe("100");
    expect(element.getAttribute('aria-valuemin')).toBe("0");
    expect(element.getAttribute('aria-valuenow')).toBe("0");

    const progressElement = element.children[1];

    if (!(progressElement instanceof HTMLElement)) {
      throw new Error('Unexpected typeof progress element');
    }

    expect(progressElement.style.transform).toBe('translateX(-100%)');
  });

  it('Clamps progress to minimum value', () => {
    const { getByRole } = render(
      <LinearProgress min={0} value={-10} />
    );

    const element = getByRole('progressbar');

    expect(element.getAttribute('aria-valuemax')).toBe("100");
    expect(element.getAttribute('aria-valuemin')).toBe("0");
    expect(element.getAttribute('aria-valuenow')).toBe("0");

    const progressElement = element.children[1];

    if (!(progressElement instanceof HTMLElement)) {
      throw new Error('Unexpected typeof progress element');
    }

    expect(progressElement.style.transform).toBe('translateX(-100%)');
  });

  it('Clamps progress to maximum value', () => {
    const { getByRole } = render(
      <LinearProgress max={100} value={200} />
    );

    const element = getByRole('progressbar');

    expect(element.getAttribute('aria-valuemax')).toBe("100");
    expect(element.getAttribute('aria-valuemin')).toBe("0");
    expect(element.getAttribute('aria-valuenow')).toBe("100");

    const progressElement = element.children[1];

    if (!(progressElement instanceof HTMLElement)) {
      throw new Error('Unexpected typeof progress element');
    }

    expect(progressElement.style.transform).toBe('translateX(-0%)');
  });

  it('Defaults to primary color', () => {
    const { getByRole } = render(
      <LinearProgress />
    );

    const element = getByRole('progressbar');
    expect(element.classList.contains('primary')).toBe(true);
  });

  it('Uses provided color', () => {
    const { getByRole } = render(
      <LinearProgress color="secondary" />
    );

    const element = getByRole('progressbar');
    expect(element.classList.contains('secondary')).toBe(true);
  });

  it('Uses provided classnames', () => {
    const { getByRole } = render(
      <LinearProgress
        classes={{
          progress: 'custom_progress',
          root: 'custom_root',
          track: 'custom_track',
        }}
        className="custom_classname"
      />
    );

    const element = getByRole('progressbar');
    const trackElement = element.children[0];
    const progressElement = element.children[1];

    if (!(trackElement instanceof HTMLElement) || !(progressElement instanceof HTMLElement)) {
      throw new Error('Unexpected child element types');
    }

    expect(element.classList.contains('custom_root')).toBe(true);
    expect(element.classList.contains('custom_classname')).toBe(true);

    expect(trackElement.classList.contains('custom_track')).toBe(true);
    expect(progressElement.classList.contains('custom_progress')).toBe(true);
  });
});
