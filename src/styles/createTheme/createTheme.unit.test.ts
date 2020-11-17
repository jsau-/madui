import { createTheme } from '.';
import { lightTheme } from '../lightTheme';

describe('createTheme', () => {
  it('Returns default theme if nothing provided', () => {
    const theme = createTheme();
    expect(theme).toEqual(lightTheme);
  });

  it('Extends the default theme with new top-level properties', () => {
    const customTheme = {
      newTopLevelProperty: 'foo',
    };

    const theme = createTheme(customTheme);

    expect(theme.newTopLevelProperty).toBe(customTheme.newTopLevelProperty);
  });

  it('Extends the default theme with nested properties', () => {
    const customTheme = {
      palette: {
        primary: {
          newNestedProperty: 'foo',
        },
      },
    };

    const theme = createTheme(customTheme);

    expect(theme.palette.primary).toEqual({
      ...lightTheme.palette.primary,
      ...customTheme.palette.primary,
    });
  });

  it('Overwrites properties on the the default theme', () => {
    const customTheme = {
      palette: {
        primary: {
          contrast: 'myCustomContrastValue',
          main: 'myCustomMainValue',
        },
      },
    };

    const theme = createTheme(customTheme);

    expect(theme.palette.primary.contrast).toBe(
      customTheme.palette.primary.contrast,
    );
    expect(theme.palette.primary.main).toBe(customTheme.palette.primary.main);
  });
});
