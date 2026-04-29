const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];
