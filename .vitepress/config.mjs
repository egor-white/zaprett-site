import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zaprett",
  cleanUrls: process.env.VITEPRESS_CLEANURL != "false" || true,
  base: process.env.VITEPRESS_BASE || '/',
  description: "Эффективное средство обхода блокировок YouTube и Discord для Android",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Домой', link: '/' },
      { text: 'Документация', link: '/guide', activeMatch: '^/guide' },
      { text: 'О нас', link: '/about' },
      { text: 'Донат', link: 'https://pay.cloudtips.ru/p/672192fd'}
    ],

    sidebar: [
      {
        text: 'Установка',
        items: [
          { text: 'Только приложение', link: '/guide/install/app-only' },
          { text: 'Приложение + модуль', link: '/guide/install/app-module' },
          { text: 'Как выбрать версию модуля', link: '/guide/install/pick-module-version' }
      ]
    },
      {
        text: 'Использование',
        items: [
          { text: 'nfqws (root)', link: '/guide/use/nfqws'},
          { text: 'byedpi (non-root)', link: '/guide/use/byedpi'},
          { text: 'Репозиторий', link: '/guide/use/repo'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CherretGit/zaprett-app' },
      { icon: 'telegram', link: 'https://t.me/zaprett_module' }
    ]
  },
  sitemap: {
    hostname: process.env.VITEPRESS_HOSTNAME || 'https://zaprett.pw'
  }
})
