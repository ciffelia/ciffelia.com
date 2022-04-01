module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'function-name-case': null,
        'function-no-unknown': null,
      },
    },
  ],
};
