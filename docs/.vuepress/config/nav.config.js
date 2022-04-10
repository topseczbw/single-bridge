module.exports = [
    { text: '首页', link: '/' },
    { text: '前言', link: '/guide/' },
    { text: '工作', items: [
      { text: '前端', items: [
        { text: 'javascript', link: '/frontend/javascript/' },
        { text: 'react', link: '/frontend/react/' },
        { text: 'vue', link: '/frontend/vue/' },
        { text: 'webpack', link: '/frontend/webpack/' },
        { text: 'css', link: '/frontend/css/' },
        { text: 'typescript', link: '/frontend/typescript/' },
        { text: 'util', link: '/frontend/utils/' },
        { text: '性能优化', link: '/frontend/performance/' },
        { text: '企业解决方案', link: '/frontend/solution/' },
        { text: '团队规范', link: '/frontend/standard/' },
        { text: '单元测试', link: '/frontend/jest/' },
      ]},
      { text: '后端', items: [
        { text: 'node', link: '/backend/node/' },
      ]},
      { text: '通用', items: [
        { text: 'http', link: '/backend/http/' },
        { text: '数据结构与算法', link: '/frontend/data-structures-algorithms/' },
        { text: '设计模式', link: '/frontend/design/' },
      ]},
      { text: '工具', items: [
        { text: 'git', link: '/tools/git/' },
        { text: 'github', link: '/tools/github/' },
        { text: 'gitlab', link: '/tools/gitlab/' },
        { text: 'webstorm', link: '/tools/webstorm/' },
        { text: 'chrome', link: '/tools/chrome/' },
        { text: 'vscode', link: '/tools/vscode/' },
        { text: 'charles', link: '/tools/charles/' },
        { text: 'mac', link: '/tools/mac/' },
      ]},
      { text: '其他', items: [
        { text: '面试题', link: '/more/interview/' },
        { text: '杂物室', link: '/more/hodgepodge/' },
      ]},
    ]},
    { text: '生活', items: [
      { text: '随笔', link: '/生活/随笔/' },
    ]},
  ];
