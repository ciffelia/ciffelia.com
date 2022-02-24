module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
