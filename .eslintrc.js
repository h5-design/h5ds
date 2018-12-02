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
  plugins: ['typescript'],
  extends: ['eslint:recommended', 'plugin:vue/essential'],
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
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error'
  }
}
