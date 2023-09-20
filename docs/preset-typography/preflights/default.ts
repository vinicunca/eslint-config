const BORDER = '1px solid var(--vd-c-divider)';

export const DEFAULT = {
  /**
   * Headings
   * --------------------------------------------------------------------------
   */
  'h1,h2,h3,h4,h5,h6': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '600',
    'outline': 'none',
    'position': 'relative',
  },
  'h1': {
    'letter-spacing': '-0.02em',
    'line-height': '1.4285714285714286',
    'font-size': '1.75em',
  },
  'h2': {
    'margin': '3rem 0 1rem',
    'border-top': BORDER,
    'padding-top': '1.5rem',
    'letter-spacing': '-0.02em',
    'line-height': '1.33333',
    'font-size': '1.5em',
  },
  'h3': {
    'margin': '2rem 0 0',
    'letter-spacing': '-0.01em',
    'line-height': '1.4',
    'font-size': '1.25em',
  },

  '.header-anchor': {
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'margin-left': '-0.87em',
    'font-weight': '500',
    'user-select': 'none',
    'opacity': 0,
    'transition': 'color 0.25s, opacity 0.25s',
  },

  'h2 .header-anchor': {
    top: '24px',
  },

  '.header-anchor:before': {
    content: 'var(--vd-header-anchor-symbol)',
  },

  /**
   * Paragraph and inline elements
   * --------------------------------------------------------------------------
   */
  'p': {
    'margin': '16px 0',
    'line-height': '28px',
  },
  'blockquote': {
    'margin': '16px 0',
    'border-left': '2px solid var(--vd-c-divider)',
    'padding-left': '16px',
    'transition': 'border-color 0.5s',
  },
  'blockquote > p': {
    'margin': 0,
    'font-size': '16px',
    'color': 'var(--vd-c-text-2)',
    'transition': 'color 0.5s',
  },
  'a': {
    'font-weight': 500,
    'color': 'var(--vd-c-brand-1)',
    'text-decoration-style': 'dotted',
    'transition': 'color 0.25s',
  },
  'a:hover': {
    'text-decoration': 'underline',
  },
  'strong': {
    'font-weight': 600,
  },

  /**
   * Lists
   * --------------------------------------------------------------------------
   */
  'ul, ol': {
    'padding-left': '1.25rem',
    'margin': '16px 0',
  },
  'ul': {
    'list-style': 'disc',
  },
  'ol': {
    'list-style': 'decimal',
  },
  'li + li': {
    'margin-top': '8px',
  },
  'li': {
    'line-height': '28px',
  },
  'li > ol, li > ul': {
    margin: '8px 0 0',
  },
  'li > span': {
    'display': 'block',
    'margin-top': '16px',
    'line-height': '28px',
  },

  /**
   * Table
   * --------------------------------------------------------------------------
   */
  'table': {
    'display': 'block',
    'border-collapse': 'collapse',
    'margin': '20px 0',
    'overflow-x': 'auto',
  },
  'tr': {
    'border-top': BORDER,
    'transition': 'background-color 0.5s',
  },
  'tr:nth-child(2n)': {
    'background-color': 'var(--vd-c-bg-soft)',
  },
  'th,td': {
    border: BORDER,
    padding: '8px 16px',
  },
  'th': {
    'font-size': '14px',
    'font-weight': 600,
    'color': 'var(--vd-c-text-2)',
    'background-color': 'var(--vd-c-bg-soft)',
  },
  'td': {
    'font-size': '14px',
  },

  /**
   * Decorational elements
   * --------------------------------------------------------------------------
   */
  'hr': {
    'margin': '16px 0',
    'border': 'none',
    'border-top': BORDER,
  },
};
