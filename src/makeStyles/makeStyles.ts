import { createUseStyles, Styles } from 'react-jss';
import { theming } from '../util/theming';

export const makeStyles = (
  styleGenerator: Styles,
): ((styles?: unknown) => Record<string, string>) =>
  createUseStyles(styleGenerator, { theming });
