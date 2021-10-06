<!-- fm-tpl/README.md
  lang: zh_CN
-->

# FM-TPL

<https://github.com/fm-elpac/fm-tpl>

(镜像: TODO)

胖蚊子翻译编程语言, 简称 "替语言".
(Fat Mosquito Translate Programming Language, TPL for short. )

![`{替}`](./logo/tpl-logo-1024.png)

已经有太多编程语言了, 不需要再多一种了.
但是, 大多数编程语言都是基于英文的.
替语言尝试把现有的任何一种编程语言翻译为别的目标语言,
比如中文, 或者你喜欢的任何东西.

There are already too many programming languages.
No need for one more.
But most of them are based on English.
TPL try to translate any programming language into another target language,
such as Chinese, or .. . whatever you like.

## 举个栗子 (example)

(`tpld-ts-zh`)

- `测试.ts.替`

  ```
  // 替 文件名 = test.ts
  控制台.写("123");
  ```

- `test.ts`

  ```ts
  console.log("123");
  ```

## 安装与使用说明

- [用户手册](./doc/user)

- [开发者文档](./doc/dev)

- [常见问题 (FAQ)](./doc/faq.md)

遇到问题欢迎 [提问](https://github.com/fm-elpac/fm-tpl/discussions).
如果在镜像页面看到此内容, 建议回到主仓库 (上方链接) 进行提问.
在镜像仓库的提问不能保证及时回复.

## 替语言主要组成

- **替语言规范** (tpl-spec)

  定义替语言核心功能, 替语言描述文件 (`.tpld.toml`),
  替语言配置文件 (`tpl_config.toml`) 的格式等.

- **替语言支持工具** (tpl-tool)

  - 代码语法解析 (tpl-ast-LANG): 实现一种原有编程语言的适配,
    主要功能为语法解析 (构建 AST).
    如 `tpl-ast-ts` 是对 TypeScript 的支持工具.

  - 开发工具集成 (tpl-ide-LANG-TOOL): 实现对相关编辑器 / IDE 的支持,
    保证较好的开发体验, 如语法高亮, 自动补全等.
    如 `tpl-ide-ts-lsp` 是对 TypeScript Language Server Protocol 的支持.

- **替语言描述文件** (tpld-PL-LIB-TL)

  定义具体的翻译规则.

  如: `tpld-ts-zh`, `tpld-ts-deno-zh`.

## 替语言优势

- **支持多种编程语言**

  设计上替语言能够适配许多现有的编程语言.

- **支持多种目标语言**

  基于一种英文编程语言, 利用同一套替语言工具 (比如 `tpl-ast-ts`) 配合不同的 tpld 文件,
  即可得到原语言的中文版, 日文版, 俄文版等各种衍生版本.

- **能够实现全中文编程**

  源代码完全使用中文和符号, 不出现一个英文单词, 是可能的.
  替语言不仅仅能够替换原语言的关键字, 原语言的标准库,
  甚至第三方软件包, 都可以被翻译为中文进行使用.
  只需要编写对应的 tpld 文件即可.

- **融入生态**

  替语言保留原语言的语法规则, 只是将其中的英文部分替换为别的语言.

  替语言能够在现有项目中使用, 对现有的项目/工具等基本不具有侵入性.
  比如一个项目可以一半源文件直接使用原语言编写, 另一半使用替语言编写.

  使用替语言不影响使用原语言的各种工具, 第三方软件包等.

## 相关代码仓库

本仓库 (fm-tpl) 存放 [替语言规范](./tpl-spec), [主要文档](./doc).
以及, 替语言中文版描述文件 (tpld-zh) 的各个原语言的核心语言部分, 标准库, 主要运行环境等.

替语言中文版 (zh_CN) 的各个原语言的第三方软件包的 tpld 文件, 集中存放在另一个仓库 (tpld-zh).

除了中文版, 别的目标语言的 tpld 文件, 应该由母语为相应语言的开发者另外建立仓库存放.

| 代码仓库                                       | 说明                                          |
| :--------------------------------------------- | :-------------------------------------------- |
| [fm-tpl](https://github.com/fm-elpac/fm-tpl)   | 本仓库                                        |
| [tpld-zh](https://github.com/fm-elpac/tpld-zh) | 替语言中文版 (zh_CN) 第三方软件包的 tpld 文件 |

## 路线计划

- 支持 TypeScript (tpld-ts-zh)

- 替语言自举 (tpld-toml-tpld-zh)

## 替语言工作原理

替语言不是一种新的编程语言, 相反, 替语言能够与许多现有的编程语言 "相结合".

比如, 手工编写的 `XXX.ts.替` 文件 (源代码, 中文),
被替语言工具 (`tpl-ast-ts`) 编译为普通的 `.ts` 文件.

然后现有的工具即可处理后续流程, 比如编译/运行 ts 文件.

## 替语言设计思想

- **提供机制而不是策略**

  替语言主要提供翻译原语言的能力 (tpl-ast-LANG),
  但并不限制具体的翻译规则.

  用户将最终决定使用什么样的具体的翻译规则.

- **方便扩展, 高度灵活**

  替语言从整体架构设计上, 就能支持多种编程语言, 以及多种目标语言.

  用户可以简单灵活地定义具体的翻译规则.
  同时, 基于同一种原语言的不同替语言 (使用不同的具体翻译规则) 之间可以相互转换 (迁移编译).
  从而在尊重每个用户选择的前提下避免碎片化, 保持代码的互操作能力.

- **文档第一** (document first)

  文档是最重要的.
  具体实现的代码不重要, 可以随时丢弃 / 重写.

## 致敬

- 文言文编程语言
  <https://github.com/wenyan-lang/wenyan>

- PUA 语言
  <https://github.com/flaneur2020/pua-lang>

- Babylscript
  <http://www.babylscript.com/>

## 友情链接

TODO

## LICENSE

[`CC-BY-SA 4.0+`](https://creativecommons.org/licenses/by-sa/4.0/)

本仓库的内容使用 创意共享-署名-相同方式共享 (CC-BY-SA 4.0) 许可证 (LICENSE).
This repository is released under Creative Common (CC-BY-SA 4.0) license.

相关代码仓库使用各自适合的许可证, 可能与本仓库不同.
替语言支持工具 (tpl-ast-LANG) 应该使用与原语言编译器相同的许可证.

替语言描述文件 (tpld) 建议使用与本仓库相同的许可证 (CC-BY-SA).
