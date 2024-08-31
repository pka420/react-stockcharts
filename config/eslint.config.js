const importPlugin = require('eslint-plugin-import');
const flowtypePlugin = require('eslint-plugin-flowtype');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const constImmutablePlugin = require('eslint-plugin-const-immutable');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    plugins: {
      import: importPlugin,
      flowtype: flowtypePlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'const-immutable': constImmutablePlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
      globals: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
    },
    settings: {
      "import/ignore": [
        "node_modules",
        "\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$",
      ],
      "import/extensions": [".js", ".jsx"],
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      },
      "flowtype": {
        onlyFilesWithFlowAnnotation: true,
      },
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:flowtype/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
    ],
    rules: {
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/no-access-key": "warn",
      "flowtype/define-flow-type": "warn",
      "flowtype/require-valid-file-annotation": "warn",
      "flowtype/use-flow-type": "warn",
      "react/jsx-pascal-case": 1,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/jsx-no-bind": 1,
      "react/jsx-no-undef": 1,
      "react/display-name": 0,
      "react/prefer-es6-class": 1,
      "react/prop-types": 1,
      "react/react-in-jsx-scope": 1,
      "const-immutable/no-mutation": 2,
      "no-var": "error",
      "prefer-const": "error",
      "array-bracket-spacing": [2, "never"],
      "block-scoped-var": 2,
      "brace-style": [2, "1tbs", { allowSingleLine: true }],
      "comma-spacing": [2, { before: false, after: true }],
      "eqeqeq": [2, "smart"],
      "key-spacing": [2, { beforeColon: false, afterColon: true }],
      "indent": [2, "tab", { SwitchCase: 1 }],
      "comma-dangle": 0,
      "jsx-quotes": [2, "prefer-double"],
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
      "no-trailing-spaces": [2, { skipBlankLines: false }],
      "no-undef": 2,
      "no-console": 0,
      "no-unused-vars": 2,
      "object-curly-spacing": [2, "always"],
      "quotes": [2, "double", "avoid-escape"],
      "semi": [2, "always"],
      "semi-spacing": [2, { before: false, after: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": 2,
      "space-before-function-paren": [2, "never"],
      "space-infix-ops": [2, { int32Hint: false }],
      "spaced-comment": [2, "always", { exceptions: ["-"] }],
    },
    ignorePatterns: [
      "node_modules/",
      "dist/",
      "*.min.js",
      "build/",
      "coverage/",
      "public/",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: "@typescript-eslint/parser",
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];

