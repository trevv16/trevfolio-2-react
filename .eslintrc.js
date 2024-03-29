module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true // Allows for the parsing of JSX
  //   }
  // },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:jest/style',
    'react-app'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-secrets/no-secrets': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 4,
        comments: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
      }
    ]
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/imports': 'off',
        'import/order': ['error', { 'newlines-between': 'always' }]
      }
    }
  ],
  plugins: ['prettier', 'simple-import-sort', 'no-secrets', 'security', 'jsx-a11y', 'jest', 'react-hooks']
};
