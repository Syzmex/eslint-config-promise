module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  extends: ['eslint-config-promise'].map( require.resolve ),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  /* eslint-disable */
  rules: {
    // plugins
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/label-has-for": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/click-events-have-key-events": [0],

    // react rules
    "react/prop-types": [0],
    "react/no-multi-comp": [0],
    "react/no-find-dom-node": [0],
    "react/react-in-jsx-scope": [0],
    "react/jsx-max-props-per-line": [0],
    "react/jsx-first-prop-new-line": [0],
    "react/jsx-filename-extension": [ 1, {
      "extensions": [ ".js", ".jsx" ]
    }],
    "react/prefer-stateless-function": [0],
    "react/jsx-closing-bracket-location": [ 1, {
      "selfClosing": "after-props",
      "nonEmpty": "after-props"
    }],
    "react/sort-comp": [ 1, {
      "order": [
        "static-methods",
        "lifecycle",
        "/^(handle|on).+$/",
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
