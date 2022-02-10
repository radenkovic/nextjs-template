// Utility to entirely disable all rules for eslint-plugin-jsx-a11y (included in airbnb-config)
const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = "off";
    return acc;
  },
  {}
);

module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:tailwindcss/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended", // Must be last!
  ],
  env: {
    browser: true,
    "cypress/globals": true,
  },
  plugins: ["tailwindcss", "cypress"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  rules: {
    ...a11yOff,
    "no-console": 1,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "tailwindcss/no-custom-classname": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
