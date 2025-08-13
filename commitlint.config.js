module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'ci',
        'perf',
        'rm',
      ],
    ],
    // 强制主题（subject）不能是空的
    'subject-empty': [2, 'never'],
    // 强制主题（subject）长度不能超过 100 字符
    'subject-max-length': [2, 'always', 100],
  },
};
