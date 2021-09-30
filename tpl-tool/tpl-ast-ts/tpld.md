# tpld-ts

替语言 TypeScript 的 tpld 格式定义.
(tpl-ast-ts)

对替语言规范 (tpl-spec) 之中预留扩展位置 (PEL) 的具体定义.

## 1 PEL: tpld 依赖

依赖默认处理方式.

- **内置依赖**

  npm 包 [@tpl-ol/doc](https://www.npmjs.com/package/@tpl-ol/doc) 中包含的 tpld 文件.
  路径 `fm-tpl/tpld/tpld-ts-*`

  比如 `tpld-ts-zh` `tpld-ts-node-zh`

- **第三方包依赖**

  以 `tpld-` 开头的对应 `@tpld/*` 的 npm 包,
  比如 `tpld-ts-npm-semver-zh` 对应 `@tpld/ts-semver-zh`

  别的对应相应的 npm 包.

## 2 PEL: tpld 类型

- **`type = "lib"`** 标准库

- **`type = "lib:*"`** 运行环境

  - `lib:b` 浏览器 (Browser)

  - `lib:node` [node.js](https://nodejs.org/)

  - `lib:deno` [Deno](https://deno.land/)

* **`type = "lib:*:*"`** 第三方包

  - `lib:npm:*` [npm](https://www.npmjs.com/) 包.
    比如 `lib:npm:semver`

  - `lib:gh:*` [github](https://github.com) 仓库.
    比如 `lib:gh:tpl-ol/nsh`

* **`type = "lib::*"`** 本地文件

  TODO

## 3 PEL: tpld 范围

### 3.1 scope 类型

| 类型         | scope (栗子)   | 定义\*                                                         | 备注 |
| :----------- | :------------- | :------------------------------------------------------------- | :--- |
| 全局范围     | `""`           |                                                                |      |
| 默认范围     | `console`      |                                                                | \*   |
| 普通范围     | `:console`     | `var` `let` `const` `function` `class` `interface` `namespace` | \*   |
| (函数返回值) | `console.log.` |                                                                | \*   |
| 类型范围     | `t:`           | `type`                                                         |      |
| 模块范围     | `m:`           | `module`                                                       |      |
| 全局范围     | `g:`           | `global`                                                       | \*   |

- **定义** \*

  在 TypeScript 代码中的定义/声明方式.

- **默认范围**

  包含 `普通范围` 和 `类型范围` (回退).

- **普通范围**

  包括 _函数参数_, _局部变量_ 等.

- **函数返回值**

  函数返回值的类型, 一种特殊的普通范围.

- **`g:`**

  用于在多层嵌套的内层指定全局范围.

### 3.2 多层嵌套

分隔符 "`\n `" `.`

TODO

## 4 PEL: tpld 匹配

TODO

## 5 PEL: tpld 自定义扩展

TODO

## 6 PEL: 配置自定义扩展

TODO
