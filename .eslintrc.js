module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:vue/base'],
  globals: {},
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0,
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    "jsx-quotes": ["off", "prefer-single"],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/self-closing-comp": "error",
    "space-before-function-paren": "off",
    "object-curly-spacing": "off"
  }
}
