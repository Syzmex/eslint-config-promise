module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'eslint-plugin-markdown',
    'eslint-plugin-import',
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y'
  ].map(require.resolve),
  rules: {
    // use double quotes for copy friendly
    "func-names": [0],
    "semi": [2, "always"],
    "comma-dangle": [2, "never"],
    "space-in-parens": [2, "always", {
      "exceptions": ["{}", "[]", "()", "empty"]
    }],
    "object-curly-spacing": [2, "always", {
      "arraysInObjects": false,
      "objectsInObjects": false
    }],
    "prefer-arrow-callback": [2],
    "arrow-parens": [2, "as-needed"],
    "arrow-body-style": [2, "as-needed"],
    "space-before-function-paren": [2, {
      "named": "never",
      "anonymous": "always",
      "asyncArrow": "ignore"
    }],
    "consistent-return": [2, {
      "treatUndefinedAsUnspecified": false
    }],
    "no-plusplus": [2, {
      "allowForLoopAfterthoughts": true
    }],
    "no-unused-vars": [2, {
      "args": "all",
      "caughtErrors": "none",
      "argsIgnorePattern": "^_|_$"
    }],
    "no-underscore-dangle": [0],
    "padded-blocks": [0],
    "import/newline-after-import": [0],
    "no-mixed-operators": [2, {
      "allowSamePrecedence": true
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "import/extensions": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-nested-ternary": [0],
    "no-bitwise": [0],
    "require-yield": [1],
    "jsx-a11y/no-static-element-interactions": [0]
  }
};
