module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "new-cap": "off",
    "no-invalid-this": "off",
    "object-curly-spacing": "off",
    semi: "off",
    "no-unused-expressions": "off",
    "babel/new-cap": airbnbBaseStyle["new-cap"],
    "babel/no-invalid-this": airbnbBaseBestPractices["no-invalid-this"],
    "babel/object-curly-spacing": airbnbBaseStyle["object-curly-spacing"],
    "babel/semi": airbnbBaseStyle.semi,
    "babel/no-unused-expressions":
      airbnbBaseBestPractices["no-unused-expressions"],
    "class-methods-use-this": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: "all",
        proseWrap: "always",
        endOfLine: "lf",
      },
    ],
  },
};
