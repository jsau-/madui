module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      "files": ['*.stories.tsx'],
      "rules": {
        "no-console": "off"
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '[iI]gnored' },
    ],
    camelcase: 'error',
    'capitalized-comments': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'eol-last': ['error', 'always'],
    'id-blacklist': ['error', 'err', 'e', 'cb', 'callback'],
    'implicit-arrow-linebreak': ['off'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 1],
    'max-depth': 'error',
    'max-len': ['error', 120],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 10],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-extend-native': 'error',
    'no-eval': 'error',
    'no-tabs': 'error',
    'no-underscore-dangle': 'off',
    'no-warning-comments': [
      'error',
      {
        terms: ['xxx', 'todo', 'fixme'],
      },
    ],
    'no-var': 'error',
    'operator-linebreak': ['error', 'after'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    yoda: ['error', 'never'],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
