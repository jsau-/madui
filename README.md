# madui

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
