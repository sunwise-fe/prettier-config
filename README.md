# @sunwise/prettier-config
Prettier Config ( 格式化配置 )


## config配置

+ No semi ( 不使用分号 )
+ Use single quotes ( 使用单引号 )
+ Ignore space around HTML tags ( 忽略 HTML 标签周围空格 )
+ Ignore pnpm-lock.yaml file ( 忽略 pnpm-lock.yaml 文件 )

## 安装

```bash
npm i -D prettier @sunwise/prettier-config

```

## 使用

Edit package.json ( 编辑 package.json )


```json
// config
"prettier": "@fzf404/prettier-config"

// script
"scripts": {
  "format": "prettier --cache --write ."
}
```
