module.exports = {
  env: {
    node: true,
    browser: true
  }
  globals: {},
  extends: ['airbnb'].map(require.resolve),
  rules: {
    semi: [2, "always"]
  }
};
