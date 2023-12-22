/**
 * 默认配置
 * @see https://juejin.cn/post/7264062850200158266?searchId=20231222170550CED3F17ADC1D2F2AC600
 */
module.exports = {
  semi: false, // default: true
  singleQuote: true, // default: false
  trailingComma: 'all', // default: "es5"
  htmlWhitespaceSensitivity: 'ignore', // default: 'css'
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/output/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: {
        requirePragma: true, // default: false
      },
    },
  ],
}
