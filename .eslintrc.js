module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
<<<<<<< HEAD
  plugins: ['react'],
  rules: {},
=======
  plugins: [
    'react',
  ],
  rules: {
    linebreak-style ["error", "windows"],
  },
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
};
