---
title: 目录规范
---

### CSR 项目

客户端渲染

```bash
├── .storybook                         # storybook配置，可选
│   ├── main.js
│   └── preview.js
├── output                             # 构建产物
├── src                                # 项目源码
│   ├── pages                          # 页面
│   │   └── moduleA-create						 # 模块A 创建页面
│   │       ├── components             # 页面子组件
│   │       ├── index.less
│   │       └── index.tsx
│   │       └── index.html             # mpa页面特有，如果是spa项目则没有该文件
│   │       └── utils.js            	 # 页面维度utils
│   │       └── constants.js           # 页面维度constants
│   │       └── otherfiles.js          # 页面维度其他文件
│   │   └── moduleA-detail						 # 模块A 详情页面
│   │       ├── components             
│   │       ├── index.less
│   │       └── index.tsx
│   │       └── index.html             
│   │       └── other files            
│   ├── api                            # api调用目录
│   │   └── index.ts
│   │   └── moduleA.ts								 # 模块A api调用
│   │   └── moduleB.ts			
│   ├── constants                      # 常量文件夹：存放各业务模块在多页面可复用的常量，业务功能公共常量
│   │		└── index.ts
│   │   └── date.ts                    # 格式化日期相关
│   │   └── moduleA.ts
│   │   └── moduleB.ts
│   ├── assets                         # 静态资源文件
│   │   ├── fonts                      # 字体包
│   │   │   ├── ionicons.eot
│   │   │   ├── ionicons.svg
│   │   │   ├── ionicons.ttf
│   │   │   └── ionicons.woff
│   │   ├── imgs                        # 图片,可以根据业务场景创建二级目录
│   │   │   └─ imgA.png
│   │   │   └─ imgB.png
│   │   └── styles                      # 公共样式
│   │   │   └─ base.less
│   │   │   └─reset.css
│   │   │   ├──mixin
│   │   │   ├── utils
│   │   │   ├── variables
│   │   │   ├──theme
│   ├── components                      # 项目维度通用业务组件
│   │   ├── basic-layout
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   │   ├── index.stories.mdx
              └── index.stories.js
│   │   ├── footer
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   │   ├── index.stories.mdx
              └── index.stories.js
│   │   ├── Header
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   │   ├── index.stories.mdx
              └── index.stories.js
│   │   ├── Lazy
│   │   │   └── index.tsx
│   │   │   ├── index.stories.mdx
│   │   │   └── index.stories.js
│   │   └── Loading
│   │       ├── index.less
│   │       └── index.tsx
│   │   │   ├── index.stories.mdx
│   │   │   └── index.stories.js
│   ├── hooks                        #自定义hooks
│   │   └── index.ts
│   │   └── use-hook-A.ts
│   │   └── use-hook-B.ts
│   ├── store                        #共享数据流store
│   │   ├── moduleA.ts
│   │   └── moduleB.ts
│   ├── types                        #ts类型定义：各业务模块类型定义
│   │   ├── moduleA.d.ts
│   │   ├── moduleB.d.ts
│   └── utils                        #工具函数库：项目维度
│   |   ├── modules								   #各业务模块可复用的工具函数
│   |   |		└── moduleA.ts						
│   |   |		└── moduleB.ts						
│   |   ├── detect									 #检查数据类型
│   |   |		└── index.ts
│   |   |		└── fnA.ts
│   |   |		└── fnB.ts
│   |   ├── event									 	 # 埋点 打点
│   |   ├── format									 # 格式化
│   |   ├── http									 	 # ajax
│   |   ├── project									 # 项目维度
│   |   ├── reg									 		 # 正则
│   |   ├── storage									 # 本地持久化
│   |   ├── type									 	 # 辅助类型检查
│   |   ├── url									 		 # url相关解析
│   ├── index.html                   # spa项目html入口，如果是mpa项目则没有该文件
│   ├── index.tsx                    # spa项目应用入口，如果是mpa项目则没有该文件
│   ├── router.tsx                   # spa项目路由文件，如果是mpa项目则没有该文件
├── test                             # 单元测试，业务组件可以加二级目录
│   └── index.test.js
├── scripts                          # 构建、编译脚本
├── .commitlintrc.js                 # commitlint配置
├── .lintrc.json                 # 项目脚手架 Lint 自定义规则
├── .gitignore                     
├── tsconfig.json                    # ts配置
└── yarn.lock
├── CHANGELOG.md
├── README.md
├── tool.config.js                   #  项目脚手架配置，包含webpack自定义配置
├── package.json
```