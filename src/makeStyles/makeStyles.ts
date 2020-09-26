import { Classes } from 'jss';
import { createUseStyles, Styles } from 'react-jss';
import { theming } from '../util/theming';
import { RecursivePartial } from '../types/RecursivePartial';
import { Theme } from '../types/Theme';

export const makeStyles = <C extends string = string>(
  styles: Styles<C> | ((theme: RecursivePartial<Theme> & Theme) => Styles<C>),
): ((params?: unknown) => Classes<C>) => createUseStyles(styles, { theming });
