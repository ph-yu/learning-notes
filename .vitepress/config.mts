import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hp.y's Notes",
  description: 'A blog which used to record my notes.',
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
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ph-yu' }]
  }
})
