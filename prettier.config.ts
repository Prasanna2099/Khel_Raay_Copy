// https://prettier.io/docs/en/options.html
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  trailingComma: "es5",
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  singleQuote: true,
  useTabs: false,
  arrowParens: "always",
  overrides: [
    {
      files: "Routes.*",
      options: {
        printWidth: 999,
      },
    },
  ],
};
