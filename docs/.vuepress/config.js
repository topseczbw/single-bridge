const moment = require('moment');
const nav = require("./nav.js");
moment.locale('zh-cn')

module.exports = {
  title: '走不完的独木桥',
  description: '前端笔记',
  // base: '/docs/',
  head: [
    ['meta', {name: 'keyword', content: '前端，笔记，走不完的独木桥，zbw'}],
    ['meta', {name: 'author', content: 'zbw'}],
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  plugins: [
    [
      'vuepress-plugin-auto-sidebar'
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('LLLL')
        }
      },
    ],
    ['@vuepress/back-to-top']
  ],
  themeConfig: {
    nav,
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.jpeg',
    // navbar: false,
    /** 根据文章目录自动生成侧边栏 */
    // sidebar: 'auto',
  },
}
