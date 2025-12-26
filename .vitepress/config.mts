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
      { text: 'CSS', link: '/CSS/' },
      { text: 'SQL', link: '/SQL/' },
      { text: 'MongoDB', link: '/MongoDB/' }
    ],

    sidebar: [
      {
        text: '开发问题汇总',
        items: [
          { text: '目录', link: '/Problems/' },
          { text: 'nvm问题', link: '/Problems/nvm' },
          { text: 'Electron问题', link: '/Problems/electron' },
          { text: 'Git问题', link: '/Problems/git' },
          { text: '其他问题', link: '/Problems/others' }
        ]
      },
      {
        text: '常用工具函数',
        items: [{ text: '复制操作', link: '/Code/copy' }]
      },
      {
        text: 'Node.js',
        items: [
          { text: 'Node.js 全局对象', link: '/Node/global-object' },
          { text: 'Node.js fs文件系统', link: '/Node/fs' },
          { text: 'Node.js path模块', link: '/Node/path' },
          { text: 'Node.js Stream', link: '/Node/Stream' }
        ]
      },
      {
        text: 'React',
        items: [
          { text: '第一章', link: '/React/First' },
          { text: '第二章', link: '/React/Second' }
        ]
      },
      {
        text: 'TypeScript',
        items: [{ text: '目录', link: '/TypeScript/' }]
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
  },
  ignoreDeadLinks: [/^https?:\/\/localhost/]
})
