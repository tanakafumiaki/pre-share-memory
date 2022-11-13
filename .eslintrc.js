module.exports = {
    "plugins": ["prettier"],
    "extends": [
        "react-app",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    "rules": {
      "no-console": 0,
      "prettier/prettier": "error",
      "@typescript-eslint/no-var-requires": false,
      "@typescript-eslint/indent": "ingore",
      "react/jsx-filename-extension": [1, {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }]
    }
  };
