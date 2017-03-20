module.exports = {
  extends: ['eslint-config-airbnb'].map( require.resolve ),
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
    'import',
    'react',
    'jsx-a11y'
  ],
  /* eslint-disable */
  rules: {
    // use double quotes for copy friendly
    "max-len": [0],
    "no-shadow": [0],
    "func-names": [0],
    "semi": [ 2, "always" ],
    "no-param-reassign": [0],
    "eol-last": [ 2, "always" ],
    "comma-dangle": [ 2, "never" ],
    "camelcase": [ 2, { properties: "never" }],
    "space-in-parens": [ 2, "always", {
      "exceptions": [ "{}", "[]", "()", "empty" ]
    }],
    "object-shorthand": [ 2, "always", {
      "avoidQuotes": true,
      "avoidExplicitReturnArrows": true
    }],
    "object-curly-spacing": [ 2, "always", {
      "arraysInObjects": false,
      "objectsInObjects": false
    }],
    "array-bracket-spacing": [ 2, "always", {
      "arraysInArrays": false,
      "objectsInArrays": false,
      "singleValue": false
    }],
    "prefer-arrow-callback": [2],
    "arrow-parens": [ 2, "as-needed" ],
    "arrow-body-style": [ 2, "as-needed" ],
    "space-before-function-paren": [ 2, {
      "named": "never",
      "anonymous": "always",
      "asyncArrow": "ignore"
    }],
    "consistent-return": [ 2, {
      "treatUndefinedAsUnspecified": false
    }],
    "no-plusplus": [0],
    "no-unused-vars": [ 2, {
      "args": "all",
      "caughtErrors": "none",
      "argsIgnorePattern": "^_|_$"
    }],
    "no-underscore-dangle": [0],
    "padded-blocks": [0],
    "no-mixed-operators": [ 2, {
      "allowSamePrecedence": true
    }],
    "no-nested-ternary": [0],
    "no-bitwise": [0],
    "require-yield": [1],

    // plugins
    "import/extensions": [0],
    "import/newline-after-import": [0],
    "jsx-a11y/no-static-element-interactions": [0],

    // react rules
    "react/jsx-filename-extension": [ 1, {
      "extensions": [ ".js", ".jsx" ]
    }],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [0],
    'react/jsx-closing-bracket-location': [ 1, {
      selfClosing: 'after-props',
      nonEmpty: 'after-props'
    }],
    "react/sort-comp": [ 1, {
      "order": [
        "static-methods",
        "lifecycle",
        "/^handle.+$/",
        "everything-else",
        "rendering"
      ],
      "groups": {
        "rendering": [ "/^render.+$/", "render" ]
      }
    }]
  }
  /* eslint-disable */
};
