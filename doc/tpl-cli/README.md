# tpl-cli

替语言命令行工具 (统一入口)

此文档描述替语言命令行工具的主要功能,
具体实现及细节 (包括安装说明) 在 [此处](../../tpl-tool/tpl-cli).

## 主要命令

tpl-cli 目前自带语言有: 英文 `en`, 简体中文 `zh_CN`.
以后考虑增加更多内置语言.

- 英文 `en`

  ```
  tpl init
  tpl config
  tpl check
  tpl compile
  tpl compile --reverse
  tpl compile --transfer
  tpl watch
  tpl --version
  tpl --help
  tpl alias
  ```

- 简体中文 `zh_CN`

  ```
  替 初始化
  替 配置
  替 检查
  替 编译
  替 编译 --反向
  替 编译 --迁移
  替 监视
  替 --版本
  替 --帮助
  替 别名

  替 别名 反向编译 -- 编译 --反向
  替 别名 迁移编译 -- 编译 --迁移
  替 反向编译
  替 迁移编译
  ```

TODO
