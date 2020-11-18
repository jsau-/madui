import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

/**
 * @see https://meyerweb.com/eric/tools/css/reset/
 */
export const useStyles = makeStyles(
  (theme: Theme) => ({
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      // eslint-disable-next-line max-len
      'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
        margin: 0,
        padding: 0,
        border: 0,
        fontFamily: theme.text.fontFamily,
        fontSize: theme.text.sizes.body1,
        verticalAlign: 'baseline',
      },
      html: {
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
      },
      'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
        display: 'block',
      },
      body: {
        backgroundColor: theme.background,
        color: theme.palette.grey.contrastDark,
        lineHeight: 1.4,
        height: '100%',
        width: '100%',
      },
      'ol, ul': {
        listStyle: 'none',
      },
      'blockquote, q': {
        quotes: 'none',
      },
      'blockquote:before, blockquote:after, q:before, q:after': {
        content: '',
      },
      table: {
        borderCollapse: 'collapse',
        borderSpacing: 0,
      },
    },
  }),
  'CssReset',
);
