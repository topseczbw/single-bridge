module.exports = [
    { text: '首页', link: '/' },
    { text: '前言', link: '/guide/' },
    { text: '系统', link: '/system/', items: [
      { text: 'Linux', link: '/system/linux/' }
    ] },
    { text: '前端', items: [
      { text: 'JavaScript', link: '/frontend/javascript/' },
      { text: 'React', link: '/frontend/react/' },
      { text: 'Vue', link: '/frontend/vue/' },
      { text: 'CSS', link: '/frontend/css/' },
      { text: 'TypeScript', link: '/frontend/typescript/' },
      { text: 'Webpack', link: '/frontend/webpack/' },
      { text: 'Utils & Lib', link: '/frontend/utils/' },
      { text: '性能优化', link: '/frontend/performance/' },
      { text: '数据结构与算法', link: '/frontend/data-structures-algorithms/' },
      { text: '设计模式', link: '/frontend/design/' },
      { text: '单元测试', link: '/frontend/jest/' },
      { text: '技术方案', link: '/frontend/solution/' },
      { text: '技术规范', link: '/frontend/standard/' },
    ]},
    { text: '后端', items: [
      { text: 'Node', link: '/backend/node/' },
      { text: 'Http', link: '/backend/http/' },
      ]},
    { text: '开发工具', items: [
      { text: 'Git', link: '/tools/git/' },
      { text: 'Github', link: '/tools/github/' },
      { text: 'Gitlab', link: '/tools/gitlab/' },
      { text: 'Webstorm', link: '/tools/webstorm/' },
      { text: 'Chrome', link: '/tools/chrome/' },
      { text: 'VSCode', link: '/tools/vscode/' },
      { text: 'Charles', link: '/tools/charles/' },
      { text: 'Mac', link: '/tools/mac/' },
    ]},
    { text: '更多', items: [
      { text: '读书笔记', link: '/more/book-note/' },
      { text: '面试题', link: '/more/interview/' },
      { text: '杂物室', link: '/more/hodgepodge/' },
    ]},
    { text: '关于我', link: '/about/'}
  ];
