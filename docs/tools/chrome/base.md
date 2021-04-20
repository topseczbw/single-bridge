---
title: Chrome 基础
---

## 下载指定版本 Chrome

1. 打开[Chrome for Android Update](https://chromereleases.googleblog.com/search/label/Stable%20updates) 更新日志，寻找大版本的最后一次更新日志，如：希望下载44.xx.xxx版本，全局搜索文本44，找到对应大版本的最新版本

2. 打开[OmahaProxy CSV Viewer](https://omahaproxy.appspot.com/) ，在 Version Information 一栏中输入目标版本，寻找对应的 **position**

    ![2021-04-20-23-48-20](/tools/chrome/2021-04-20-23-48-20.png)

3. 打开[Index of chromium-browser-snapshots](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html) ，进入对应操作系统文件夹，检索目标版本压缩包

### 资料

- [Download Chromium](https://www.chromium.org/getting-involved/download-chromium)