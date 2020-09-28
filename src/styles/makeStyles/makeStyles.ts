import { Classes } from 'jss';
import { createUseStyles, Styles } from 'react-jss';
import { theming } from '../../utils/theming';
import { RecursivePartial } from '../../types/RecursivePartial';
import { Theme } from '../../types/Theme';
import { defaultsDeep } from 'lodash';

/**
 * Make a function which, when invoked, returns an object of component styles.
 * Note that this function will also apply override styles from the theme.
 *
 * @param styles - Function generating component styles object from the theme.
 * @param component - Component name, used for fetching override styles from the
 * theme.
 * @returns Hook function for getting styles object.
 */
export const makeStyles = <C extends string = string>(
  styles: (theme: RecursivePartial<Theme> & Theme) => Styles<C>,
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

  return createUseStyles(mergedStyles, { theming });
};
