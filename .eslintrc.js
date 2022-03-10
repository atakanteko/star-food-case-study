module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'arrow-parens': [
      2,
      'as-needed',
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '_doc',
        ],
      },
    ],
    'operator-linebreak': 'off',
    'brace-style': [
      'error',
      '1tbs',
    ],
    indent: [
      'error',
      2,
    ],
    'max-len': ['error', {
      code: 160,
      tabWidth: 2,
      ignorePattern: 'd=\'([\\s\\S]*?)\'',
    }],
    'no-shadow': ['error', { allow: ['state'] }],
  },
  settings: {
    'import/core-modules': [
      'vuetify',
      'vuetify/es5/util/colors',
    ],
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
        ],
        extensions: ['.vue', '.js'],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
