# madui

**NOTE: This project is by no means currently stable. Use
parts of it at your own peril. Open-sourcing during
prototyping for reference.**

A collection of React components to build simple or prototype sites.

### Theming

To use the library, you must use `src/ThemeProvider` and `src/CssReset` at the
root of your application. eg.

```javascript
const App = () => (
  <ThemeProvider theme={createTheme()}>
    <CssReset />
    <MyContent />
  </ThemeProvider>
);
```

To create a theme, use function `src/styles/createTheme`. The expected schema
of a theme can be found in `src/types/Theme` (note that if a field is
omitted from a custom theme, a value will be take from
`src/styles/lightTheme`.). eg.

```javascript
// Using the default theme directly
const theme = createTheme();

// Customizing some theme fields
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF00FF',
    },
  },
});
```

### Styling

Function `src/makeStyles` creates a hook function, which can be used inside
components to access class names. eg.

```javascript
// Component.styles.ts
export const useStyles = makeStyles((theme: MyThemeType) => ({
  root: {
    margin: 0,
    padding: 0,
  },
}));

// Component.tsx
const Component = () => {
  const classes = useStyles();
  return <div className={classes.root} />
}
```

Function `src/makeStyles` also accepts a second parameter which is used to
load overrides from the `Theme` object. These overrides are automatically merged
over any component styles. eg.

```javascript
// MyTheme.ts
export const MyTheme = {
  overrides: {
    ComponentToOverride {
      root: {
        color: 'magenta',
      },
    },
  },
};

// ComponentToOverride.styles.ts
export const useStyles = makeStyles((theme: MyThemeType) => ({
  root: {
    margin: 0,
    padding: 0,
  },
}), 'ComponentToOverride');
```
