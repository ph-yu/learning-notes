import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hp.y's Notes",
  description: 'A blog which used to record my notes.',
  base: '/learning-notes/',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'TypeScript', link: '/TypeScript/' },
      { text: 'SQL', link: '/SQL/intro' }
    ],

    sidebar: [
      {
        text: 'TypeScript',
        items: [
          { text: '工具类型', link: '/TypeScript/工具类型' },
          { text: '从类型中创建类型', link: '/TypeScript/从类型中创建类型' }
        ]
      },
      {
        text: 'SQL',
        items: [{ text: 'SQL基础', link: '/SQL/intro' }]
      },
      {
        text: 'MongoDB',
        items: [
          { text: '基本概念', link: '/MongoDB/' },
          { text: '数据库操作', link: '/MongoDB/database' },
          { text: '集合操作', link: '/MongoDB/collection' },
          { text: '文档操作', link: '/MongoDB/document' },
          { text: '索引', link: '/MongoDB/createIndex' },
          { text: '聚合', link: '/MongoDB/aggregate' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ph-yu' }]
  },
  vite: {
    server: {
      open: true,
      port: 5678
    }
  }
})
