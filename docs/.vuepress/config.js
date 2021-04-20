const moment = require('moment');
const navConf = require("./config/nav.config.js");
moment.locale('zh-cn')

module.exports = {
  title: '走不完的独木桥',
  // description: '走不完的独木桥',
  // base: '/docs/',
  head: [
    ['meta', {name: 'keyword', content: '前端，笔记，走不完的独木桥，zbw'}],
    ['meta', {name: 'author', content: 'zbw'}],
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  plugins: [
    ['@vuepress/medium-zoom', {
      selector: 'img',
    }],
    [
      'vuepress-plugin-auto-sidebar', {
        title: {
          mode: "uppercase",
          map: {
            "/frontend/javascript/": "JavaScript 基础",
            "/backend/node/": "Node 基础",
          }
        },
        collapse: {
          collapseList: ["/frontend/javascript/", "/backend/node/"]
        }
      }
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
    lastUpdated: '上次更新',
    /** 左上角名字旁边的logo */
    // logo: '/assets/img/logo.jpeg',
    // 当你提供了 themeConfig.repo 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接。
    repo: 'topseczbw/single-bridge',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '帮助改善此页面',
    docsBranch: 'main',
    nav: navConf
    // navbar: false,
    // 根据文章目录自动生成侧边栏
    // sidebar: 'auto',
  },
}
