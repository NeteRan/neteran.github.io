import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点信息
  lang: 'zh-CN',
  title: 'NeteRan',
  description: 'NeteRan 的技术博客 —— CTF Writeup / 算法题解 / 学习笔记 / 代码项目',

  // 站点根目录（相对项目根）
  srcDir: 'docs',

  // 暗色主题
  appearance: true,

  // 清理 URL，去掉 .html 后缀
  cleanUrls: true,

  // 头部
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0f0f14' }],
  ],

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: 'CTF Writeup', link: '/ctf/' },
      { text: '算法题解', link: '/algo/' },
      { text: '学习笔记', link: '/notes/' },
      { text: '代码项目', link: '/projects/' },
      {
        text: 'GitHub',
        link: 'https://github.com/NeteRan',
      },
    ],

    // 侧边栏（按分类）
    sidebar: {
      '/ctf/': [
        {
          text: 'CTF Writeup',
          items: [
            { text: 'CTF 总览', link: '/ctf/' },
            { text: '示例：一道 Web 题', link: '/ctf/example-web-writeup' },
          ],
        },
      ],
      '/algo/': [
        {
          text: '算法题解',
          items: [
            { text: '算法总览', link: '/algo/' },
          ],
        },
      ],
      '/notes/': [
        {
          text: '学习笔记',
          items: [
            { text: '笔记总览', link: '/notes/' },
          ],
        },
        {
          text: '渗透测试',
          items: [
            { text: '渗透测试总览', link: '/notes/pentest/' },
          ],
        },
        {
          text: '阶段一 · 信息收集',
          collapsed: false,
          items: [
            { text: '基础信息收集', link: '/notes/pentest/' },
            { text: '授权范围与测试边界', link: '/notes/pentest/授权范围与测试边界' },
            { text: '业务与角色梳理', link: '/notes/pentest/业务与角色梳理' },
            { text: '子域名枚举', link: '/notes/pentest/子域名枚举' },
            { text: '证书透明日志', link: '/notes/pentest/证书透明日志' },
            { text: '存活检测', link: '/notes/pentest/存活检测' },
            { text: '资产统计', link: '/notes/pentest/资产统计' },
          ],
        },
        {
          text: '阶段二 · 漏洞挖掘',
          collapsed: false,
          items: [
            { text: '自动化筛查与人工验证', link: '/notes/pentest/' },
          ],
        },
        {
          text: '阶段三 · 漏洞利用与验证',
          collapsed: false,
          items: [
            { text: '漏洞利用与定级', link: '/notes/pentest/' },
          ],
        },
        {
          text: '阶段四 · 报告与答辩',
          collapsed: false,
          items: [
            { text: '报告撰写与答辩', link: '/notes/pentest/' },
          ],
        },
      ],
      '/projects/': [
        {
          text: '代码项目',
          items: [
            { text: '项目总览', link: '/projects/' },
          ],
        },
      ],
    },

    // 社交链接（右侧图标）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeteRan' },
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 NeteRan',
    },

    // 搜索（本地搜索）
    search: {
      provider: 'local',
    },

    // 文章编辑链接
    editLink: {
      pattern: 'https://github.com/NeteRan/neteran.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    // 文档大纲
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
    image: {
      lazyLoading: true,
    },
  },
})
