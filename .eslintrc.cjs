module.exports = {
  env: {
    node: true,
    browser: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // eslint-config-prettier: 禁用与 Prettier 冲突的规则
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 移除 semi 和 quotes 规则，让 Prettier 处理格式化
    '@typescript-eslint/triple-slash-reference': 'off',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
}
