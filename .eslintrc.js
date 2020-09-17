module.exports = {
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  rules: {
    "arrow-body-style": "warn",
    "react/jsx-props-no-spreading": 0,
    "react/no-danger": 0,
    "react/prop-types": [2, { ignore: ['children', 'componentId', 'render'] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["components", "./components"],
          ["contentful", "./contentful"],
          ["lang", "./lang"],
          ["pages", "./pages"],
          ["screens", "./screens"],
          ["styles", "./styles"],
          ["utils", "./utils"],
        ],
      },
    },
  },
  globals: {
    "__DEV__": true,
  },
};
