# tpld-ts-zh

支持级别 [`L0` 尚未支持](../../doc/level.md)

替语言 TypeScript 中文版 描述文件 (翻译).

关键字参考 TypeScript 编译器源码.
<https://github.com/tpl-ol/tpl-ast-ts-tsc/blob/main/src/compiler/scanner.ts#L79>

标准库参考 `lib.*.d.ts` 文件.
<https://github.com/tpl-ol/tpl-ast-ts-tsc/tree/main/lib>

## 栗子

- `栗子.ts.替`

  ```
  // 替 文件名 = example.ts

  术 格式化(值: 数): 串 {
    若 (值 > 8) {
      返回 "优秀";
    } 另 若 (值 > 6) {
      返回 "良好";
    } 另 {
      返回 "差";
    }
  }
  ```

- 编译后生成 `example.ts`

  ```ts
  function 格式化(值: number): string {
    if (值 > 8) {
      return "优秀";
    } else if (值 > 6) {
      return "良好";
    } else {
      return "差";
    }
  }
  ```

## 关键字对照表 (78 个)

| ts          | 替语言   | 备注     |
| :---------- | :------- | :------- |
| abstract    | 抽象     |          |
| any         | 任何     |          |
| as          | 作       |          |
| asserts     | 断言     |          |
| async       | 异步     |          |
| await       | 待       |          |
| bigint      | 大整数   |          |
| boolean     | 二       |          |
| break       | 断       |          |
| case        | 情况     |          |
| catch       | 捉       |          |
| class       | 类       |          |
| const       | 常       |          |
| constructor | 构造     |          |
| continue    | 继续     |          |
| debugger    | 调试器   |          |
| declare     | 声明     |          |
| default     | 默认     |          |
| delete      | 删       |          |
| do          | 干       |          |
| else        | 另       |          |
| enum        | 枚举     |          |
| export      | 导出     |          |
| extends     | 扩展     |          |
| false       | 假       |          |
| finally     | 最后     |          |
| for         | 为       |          |
| from        | 从       |          |
| function    | 术       |          |
| get         | 取       |          |
| global      | 全局     |          |
| if          | 若       |          |
| implements  | 实现     |          |
| import      | 导入     |          |
| in          | 在       |          |
| infer       | 推断     |          |
| instanceof  | 是实例   |          |
| interface   | 接口     |          |
| intrinsic   |          | 拒绝翻译 |
| is          | 是       |          |
| keyof       | 其键     |          |
| let         | 令       |          |
| module      | 模块     |          |
| namespace   | 命名空间 |          |
| never       | 从不     |          |
| new         | 新       |          |
| null        | 空       |          |
| number      | 数       |          |
| object      | 物       |          |
| of          | 于       |          |
| override    | 重写     |          |
| package     | 包       |          |
| private     | 私       |          |
| protected   | 护       |          |
| public      | 公       |          |
| readonly    | 只读     |          |
| require     | 要求     |          |
| return      | 返回     |          |
| set         | 设       |          |
| static      | 静态     |          |
| string      | 串       |          |
| super       | 超       |          |
| switch      | 选择     |          |
| symbol      | 符号     |          |
| this        | 这       |          |
| throw       | 扔       |          |
| true        | 真       |          |
| try         | 试       |          |
| type        | 类型     |          |
| typeof      | typeof   | 拒绝翻译 |
| undefined   | 未定义   |          |
| unique      | 唯一     |          |
| unknown     | 未知     |          |
| var         | 变量     |          |
| void        | 无       |          |
| while       | 当       |          |
| with        | 同       |          |
| yield       | 产生     |          |

TODO
