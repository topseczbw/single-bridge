---
title: 常用命令
---

- 查询端口占用情况，查看端口被那些进程占用，如：8080

```zsh
lsof -i tcp:8080
```

- 根据 pid 杀死进程，如：杀死 pid 为 23453 的进程

```zsh
kill -9 23453
```