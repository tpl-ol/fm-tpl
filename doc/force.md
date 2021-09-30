# 强行改造不支持 Unicode 标识符的编程语言的建议

不支持 Unicode 标识符的编程语言属于 [`-1` 不考虑支持](./level.md) 级别.

但是, 如果对这种编程语言进行改造, 建议如下:

## Unicode 标识符允许的字符

建议与 `ECMAScript` (js) 最新版本保持一致.

具体实现参考 TypeScript 编译器:
<https://github.com/microsoft/TypeScript/blob/main/src/compiler/scanner.ts#L283>

```ts
/**
 * Generated by scripts/regenerate-unicode-identifier-parts.js on node v12.4.0 with unicode 12.1
 * based on http://www.unicode.org/reports/tr31/ and https://www.ecma-international.org/ecma-262/6.0/#sec-names-and-keywords
 * unicodeESNextIdentifierStart corresponds to the ID_Start and Other_ID_Start property, and
 * unicodeESNextIdentifierPart corresponds to ID_Continue, Other_ID_Continue, plus ID_Start and Other_ID_Start
 */
const unicodeESNextIdentifierStart = [
  /* */
];
const unicodeESNextIdentifierPart = [
  /* */
];
```

把这里的 Unicode 码范围数组直接复制过来, 判断应该用不了几行代码,
实现比较简单.

## 关键字替换

建议所有符合语法的标识符都可定义为原有关键字的替换.

TODO