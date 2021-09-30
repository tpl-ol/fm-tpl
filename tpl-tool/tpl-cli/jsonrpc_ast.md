# 替语言服务

由命令 `tpl-ast-LANG jsonrpc` 提供.
使用 [JSON-RPC 2.0](https://www.jsonrpc.org/specification)

接口版本号 `0.1.0-a1`
使用 [语义化版本 (SEMVER 2.0.0)](https://semver.org/lang/zh-CN/)

````ts
// jsonrpc_ast.d.ts
// 引用: jsonrpc_toml.d.ts

// 对于 (可选) 不支持的功能应该:
// ```
// throw "不支持";
// ```
export type 不支持标志 = "不支持";

// JSON-RPC 接口: 替语言支持工具的主要接口 (具体原语言支持)
// 远程调用全部是异步形式 (Promise)
interface 替语言服务 {
  /// 返回工具 (tpl-ast-LANG) 的版本号
  版本(): Promise<string>;

  /// 本接口的版本号, 用于兼容性
  接口版本(): Promise<string>;

  /// 加载 tpl_config.toml 等配置
  /// 如果配置有问题, 返回错误/警告
  配置加载(配置: 配置数据): Promise<Array<检查结果>>;

  /// 对 tpld 文件进行具体语言相关的检查
  tpld_检查(原始: tpld加载结果): Promise<Array<检查结果>>;

  /// 检查并加载 tpld 文件
  tpld_加载(原始: tpld加载结果): Promise<Array<检查结果>>;

  /// [可选] 解读 tpld 文件中具体语言相关的部分, 给出其语义
  /// 用于 tpl-th 工具理解 tpld 文件
  tpld_解析(原始: tpld加载结果): Promise<tpld解析结果>;

  /// [可选] 从某个待翻译的原始材料中提取并生成 `.tpld.toml` 文件
  /// 用于 tpl-th 工具的待翻译提取功能
  tpld_提取(选项: tpld提取选项): Promise<tpld提取结果>;

  /// 从指定目录中枚举需要处理的源代码文件
  枚举代码文件(目录: string): Promise<Array<枚举结果>>;

  /// 正向编译功能: 编译一个源代码文件, 返回错误/警告
  编译(文件: 枚举结果): Promise<Array<检查结果>>;

  /// 反向编译功能
  反向编译(文件: 枚举结果): Promise<Array<检查结果>>;

  /// [可选] 监视源代码文件, 当出现文件修改 (新增, 编辑, 删除) 时返回变更列表
  /// 如果扔出错误, 意味着监视失败, 需要重新枚举代码文件
  监视(选项: 监视选项): Promise<Array<检查结果>>;
}
````

TODO
