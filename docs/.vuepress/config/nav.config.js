module.exports = [
    { text: '首页', link: '/' },
    { text: '前言', link: '/guide/' },
    { text: '前端', items: [
      { text: 'JavaScript', link: '/frontend/javascript/' },
      { text: 'React', link: '/frontend/react/' },
      { text: 'Vue', link: '/frontend/vue/' },
      { text: 'CSS', link: '/frontend/css/' },
      { text: 'TypeScript', link: '/frontend/typescript/' },
      { text: 'Webpack', link: '/frontend/webpack/' },
      { text: 'Utils', link: '/frontend/utils/' },
      { text: '性能优化', link: '/frontend/performance/' },
      { text: '数据结构和算法', link: '/frontend/design/' },
      { text: '设计模式', link: '/frontend/design/' },
      { text: '单元测试', link: '/frontend/jest/' },
    ]},
    { text: '后端', items: [
      { text: 'Node', link: '/backend/nodejs/' },
      { text: 'Http', link: '/backend/http/' },
        // { text: 'Nestjs', link: '/backend/nestjs/' },
        // { text: 'MySQL', link: '/backend/mysql/' },
        // { text: 'MongoDB', link: '/backend/mongodb/' },
        // { text: 'Redis', link: '/backend/redis/' },
        // { text: 'Docker', link: '/backend/docker/' },
      ]},
    { text: '开发工具', items: [
      { text: 'Git', link: '/tools/git/' },
      { text: 'Github', link: '/tools/github/' },
      { text: 'VSCode', link: '/tools/vscode/' },
      { text: 'Chrome Developer tools', link: '/tools/chrome/' },
    ]},
    { text: '更多', items: [
      { text: '面试题', link: '/more/interview/' },
      { text: '小工具', link: '/more/hodgepodge/' },
    ]}
  ];
