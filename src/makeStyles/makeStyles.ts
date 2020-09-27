import { Classes } from 'jss';
import { createUseStyles, Styles } from 'react-jss';
import { theming } from '../util/theming';
import { RecursivePartial } from '../types/RecursivePartial';
import { Theme } from '../types/Theme';
import { defaultsDeep } from 'lodash';

export const makeStyles = <C extends string = string>(
  styles: ((theme: RecursivePartial<Theme> & Theme) => Styles<C>),
  component?: string,
): ((params?: unknown) => Classes<C>) => {
  const mergedStyles = (theme: RecursivePartial<Theme> & Theme): Styles<C> => {
    let overrideStyles = {};

    if (component) {
      overrideStyles = theme?.overrides?.[component] || {};
    }

    const defaultStyles = styles(theme);

    return defaultsDeep({}, overrideStyles, defaultStyles);
  };

  return createUseStyles(mergedStyles, { theming })
};
