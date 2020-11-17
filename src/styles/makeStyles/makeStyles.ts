import { createUseStyles, Styles, Theming } from 'react-jss';
import { theming } from '../../utils/theming';
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
export const makeStyles = <T extends Theme, C extends string = string>(
  styles: (theme: T) => Styles<C>,
  component?: string,
) => {
  const mergedStyles = (theme: T): Styles<C> => {
    let overrideStyles = {};

    if (component) {
      overrideStyles = theme?.overrides?.[component] || {};
    }

    const defaultStyles = styles(theme);

    return defaultsDeep({}, overrideStyles, defaultStyles);
  };

  /*
   * `theming` has type Theming<RecursivePartial<Theme> & Theme>, due
   * to us instantiating it in `utils/theming` with a default theme.
   *
   * Consumers of this library will obviously need to invoke this function
   * with arbitrary themes of their own design. This is a dirty workaround to
   * quiet TS down about how the types might not be compatible.
   */
  const castedTheming = (theming as unknown) as Theming<T>;

  return createUseStyles(mergedStyles, { theming: castedTheming });
};
