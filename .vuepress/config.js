const configs = {
  title: 'Documentation',
  description: 'The builders\' open economy',
  plugins: {},
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { hid: 'og:image:height', property: 'og:image:height', content: '1257' }],
    ['meta', { hid: 'og:image:width', property: 'og:image:width', content: '2400' }],
    ['meta', { hid: 'og:image', property: 'og:image', content: 'https://docs.mesg.com/og-image.jpg' }]
  ],
  themeConfig: {
    logo: '/logo-light.png',
    searchMaxSuggestions: 15,
    lastUpdated: true,
    repo: 'mesg-foundation/',
    repoLabel: 'GitHub',
    docsRepo: 'mesg-foundation/docs',
    docsBranch: 'master',
    docsDir: '.',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    sidebarDepth: 0,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tutorials',
        link: 'https://blog.mesg.com/tag/tutorials/'
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Help',
            items: [
              { text: 'Forum', link: 'https://forum.mesg.com' },
              { text: 'Discord', link: 'https://discord.gg/5tVTHJC' }
            ]
          },
          {
            text: 'Resources',
            items: [
              { text: 'Testnet Explorer', link: 'http://explorer.testnet.mesg.com' },
              { text: 'Awesome list', link: 'https://github.com/mesg-foundation/awesome' },
              { text: 'Release Notes', link: 'https://blog.mesg.com/tag/product/' }
            ]
          },
          {
            text: 'News',
            items: [
              { text: 'Website', link: 'https://mesg.com/' },
              { text: 'Blog', link: 'https://blog.mesg.com/' },
              { text: 'Twitter', link: 'https://twitter.com/mesgfoundation' },
              { text: 'Linkedin', link: 'https://www.linkedin.com/company/mesg/' },
              { text: 'Facebook', link: 'https://www.facebook.com/mesgfoundation/' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      ['/', 'Get started'],
      {
        title: 'MESG Framework',
        collapsable: false,
        path: '/framework/',
        children: [
          ['/framework/core-concept', 'Core concepts'],
          ['/framework/structure', 'Application structure'],
          ['/framework/process/definition', 'Process definition'],
          ['/framework/service/structure', 'Service structure'],
          ['/framework/service/definition', 'mesg.yml'],
          ['/framework/service/task', 'Task'],
          ['/framework/service/event', 'Event'],
        ]
      },
      ['/deployment', 'Deployment'],
      ['https://github.com/mesg-foundation/js-sdk/blob/master/packages/cli/README.md', 'MESG CLI'],
      ['/api/service', 'API']
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  configs.plugins = {
    ...configs.plugins,
    dehydrate: { noSSR: '(404.html|api/*.html)' },
    '@vuepress/google-analytics': { ga: 'UA-117583862-3' },
    'vuepress-plugin-google-tag-manager': { gtm: 'GTM-KNWS9XW' },
    sitemap: { hostname: 'https://docs.mesg.com' }
  }
}

module.exports = configs