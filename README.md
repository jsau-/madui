# madui

A collection of React components to build simple or prototype sites.

### Theming

To use the library, you must use `src/ThemeProvider` at the root of
your application. eg.

```javascript
const App = () => (
  <ThemeProvider theme={createTheme()}>
    <MyContent />
  </ThemeProvider>
);
```

To create a theme, use function `src/createTheme`. The expected schema
of a theme can be found in `src/types/Theme` (note that if a field is
omitted from a custom theme, a value will be take from
`src/defaultTheme`.). eg.

```
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
