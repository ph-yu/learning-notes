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
      { text: 'SQL', link: '/SQL/' },
      { text: 'MongoDB', link: '/MongoDB/' }
    ],

    sidebar: [
      {
        text: 'Node.js',
        items: [{ text: 'Node.js Stream', link: '/Node/Stream' }]
      },
      {
        text: 'TypeScript',
        items: [
          { text: '工具类型', link: '/TypeScript/工具类型' },
          { text: '从类型中创建类型', link: '/TypeScript/从类型中创建类型' }
        ]
      },
      {
        text: 'SQL',
        items: [
          { text: 'SQL简介', link: '/SQL/' },
          { text: 'DDL相关语句', link: '/SQL/DDL' },
          { text: 'DML相关语句', link: '/SQL/DML' },
          { text: 'DQL相关语句', link: '/SQL/DQL' },
          { text: 'DCL相关语句', link: '/SQL/DCL' },
          { text: '约束', link: '/SQL/constraint' },
          { text: '多表查询', link: '/SQL/multi-table-query' },
          { text: 'MySQL中的函数', link: '/SQL/mysql-function' }
        ]
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
