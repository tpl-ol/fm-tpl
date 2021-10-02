# tpld-r-zh

支持级别 [`L0` 尚未支持](../../doc/level.md)

替语言 R 中文版 描述文件 (翻译).

关键字参考 <https://cran.r-project.org/doc/manuals/r-patched/R-lang.html#Reserved-words>

标准库参考 (r_base):

```
R> ls("package:base")
R> help(XXX)
```

## 栗子

TODO

## 关键字对照表

关键字: 19 个
([10.3.3 Reserved words](https://cran.r-project.org/doc/manuals/r-patched/R-lang.html#Reserved-words))

| R              | 替语言     | 备注                |
| :------------- | :--------- | :------------------ |
| break          | 断         |                     |
| else           | 另         |                     |
| for            | 为         |                     |
| function       | 术         |                     |
| if             | 若         |                     |
| in             | 在         |                     |
| next           | 继续       | 类似 `continue`     |
| repeat         | 循环       | 类似 Rust 的 `loop` |
| while          | 当         |                     |
| FALSE          | 假         |                     |
| Inf            | 无穷       |                     |
| NaN            | 非数       |                     |
| NA             | 无         |                     |
| NA_integer\_   | 无\_整数\_ |                     |
| NA_real\_      | 无\_实数\_ |                     |
| NA_complex\_   | 无\_复数\_ |                     |
| NA_character\_ | 无\_字符\_ |                     |
| NULL           | 空         |                     |
| TRUE           | 真         |                     |

内置数据类型:
([2 Objects](https://cran.r-project.org/doc/manuals/r-patched/R-lang.html#Objects))

`typeof()`, `mode()`, `storage.mode()` 返回值.

| R           | 替语言   | 备注     |
| :---------- | :------- | :------- |
| NULL        | 空       |          |
| symbol      | 符号     |          |
| pairlist    | 对表     |          |
| closure     | 闭包     |          |
| environment | 环境     |          |
| promise     | 许诺     |          |
| language    | 语言     |          |
| special     | 特殊     |          |
| builtin     | 内置     |          |
| char        | 字符     |          |
| logical     | 逻辑     |          |
| integer     | 整数     |          |
| double      | 实数     |          |
| complex     | 复数     |          |
| character   | 串       | 字符串   |
| any         | 任何     |          |
| expression  | 表达式   |          |
| list        | 列表     |          |
| bytecode    | 字节码   |          |
| externalptr | 外部指针 |          |
| weakref     | 弱引用   |          |
| raw         | 字节     |          |
| S4          |          | 拒绝翻译 |
| numeric     | 数字     |          |
| call        | 调用     |          |
| name        | 名       |          |

特殊属性:
([2.2 Attributes](https://cran.r-project.org/doc/manuals/r-patched/R-lang.html#Attributes))

| R         | 替语言 | 备注 |
| :-------- | :----- | :--- |
| class     | 类     |      |
| contrasts | 对比   |      |
| dim       | 维     |      |
| dimnames  | 维名   |      |
| levels    | 级     |      |
| names     | 名     |      |
| row.names | 行名   |      |
| tsp       | 时系   |      |

特殊类: (class)

| R       | 替语言 | 备注 |
| :------ | :----- | :--- |
| factor  | 因子   |      |
| ordered | 有序   |      |

特殊函数:
([2 .Internal vs .Primitive](https://cran.r-project.org/doc/manuals/r-patched/R-ints.html#g_t_002eInternal-vs-_002ePrimitive))

| R                    | 替语言      | 备注     |
| :------------------- | :---------- | :------- |
| .C()                 |             | 拒绝翻译 |
| .Call()              | .调用()     |          |
| .Call.graphics()     | .调用图形() |          |
| .External()          | .外部()     |          |
| .External.graphics() | .外部图形() |          |
| .Fortran()           |             | 拒绝翻译 |
| .Internal()          | .内部()     |          |
| .Primitive()         | .原始()     |          |
| as.call()            | 作调用()    |          |
| as.character()       | 作字符()    |          |
| as.complex()         | 作复数()    |          |
| as.double()          | 作实数()    |          |
| as.environment()     | 作环境()    |          |
| as.integer()         | 作整数()    |          |
| as.logical()         | 作逻辑()    |          |
| as.raw()             | 作字节()    |          |
| attr()               | 属()        |          |
| attr<-               | 属<-        |          |
| attributes()         | 属性()      |          |
| attributes<-         | 属性<-      |          |
| baseenv()            | 基环境()    |          |
| browser()            | 浏览()      |          |
| c()                  | 向量()      |          |
| call()               | 调用()      |          |
| cbind()              | 列合()      |          |
| class()              | 类()        |          |
| class<-              | 类<-        |          |
| dim()                | 维()        |          |
| dim<-                | 维<-        |          |
| dimnames()           | 维名()      |          |
| dimnames<-           | 维名<-      |          |
| eapply()             | 环境施用()  |          |
| emptyenv()           | 空环境()    |          |
| environment<-        | 环境<-      |          |
| expression()         | 表达式()    |          |
| globalenv()          | 全局环境()  |          |
| interactive()        | 交互的()    |          |
| invisible()          | 不可见()    |          |
| is.array()           | 是数组()    |          |
| is.atomic()          | 是原子()    |          |
| is.call()            | 是调用()    |          |
| is.character()       | 是字符()    |          |
| is.complex()         | 是复数()    |          |
| is.double()          | 是实数()    |          |
| is.environment()     | 是环境()    |          |
| is.expression()      | 是表达式()  |          |
| is.finite()          | 是有限()    |          |
| is.function()        | 是函数()    |          |
| is.infinite()        | 是无限()    |          |
| is.integer()         | 是整数()    |          |
| is.language()        | 是语言()    |          |
| is.list()            | 是列表()    |          |
| is.logical()         | 是逻辑()    |          |
| is.matrix()          | 是矩阵()    |          |
| is.na()              | 是无()      |          |
| is.name()            | 是名()      |          |
| is.nan()             | 是非数()    |          |
| is.null()            | 是空()      |          |
| is.numeric()         | 是数字()    |          |
| is.object()          | 是物()      |          |
| is.pairlist()        | 是对表()    |          |
| is.raw()             | 是字节()    |          |
| is.recursive()       | 是递归()    |          |
| is.single()          | 是单()      |          |
| is.symbol()          | 是符号()    |          |
| lapply()             | 列施用()    |          |
| length()             | 长度()      |          |
| length<-             | 长度<-      |          |
| levels<-             | 级<-        |          |
| list()               | 列表()      |          |
| missing()            | 缺()        |          |
| names()              | 名()        |          |
| names<-              | 名<-        |          |
| nargs()              | 参个数()    |          |
| oldClass()           | 旧类()      |          |
| oldClass<-           | 旧类<-      |          |
| on.exit()            | 退出时()    |          |
| pos.to.env()         | 位至环境()  |          |
| quote()              | 引用()      |          |
| rbind()              | 行合()      |          |
| return()             | 返回()      |          |
| rep()                | 再造()      |          |
| round()              | 大约()      |          |
| seq_along()          | 序同()      |          |
| seq_len()            | 序长()      |          |
| seq.int()            | 序内()      |          |
| signif()             | 约数()      |          |
| standardGeneric()    | 标准通用()  |          |
| storage.mode<-       | 存储模式<-  |          |
| substitute()         | 取代()      |          |
| switch()             | 选择()      |          |
| unclass()            | 去类()      |          |
| vapply()             | 值施用()    |          |
| withVisible()        | 同可见()    |          |
| NextMethod()         | 下个方法()  |          |
| Recall()             | 递归调用()  |          |
| UseMethod()          | 用方法()    |          |

数学函数: (`.Primitive`)

```
abs     sign    sqrt
floor   ceiling

exp     expm1
log2    log10   log1p
cos     sin     tan
acos    asin    atan
cosh    sinh    tanh
acosh   asinh   atanh
cospi   sinpi   tanpi

gamma   lgamma  digamma trigamma

cumsum  cumprod cummax  cummin

Im  Re  Arg  Conj  Mod

log  trunc
```

常见函数:

| R         | 替语言 | 备注                                 |
| :-------- | :----- | :----------------------------------- |
| library() | 用()   | 加载包 (package), 类似 Rust 的 `use` |

TODO
