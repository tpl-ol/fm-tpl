// jsonrpc_toml.d.ts

// JSON-RPC 接口: 替语言工具的底层功能
// 远程调用全部是异步形式 (Promise)
interface 替底层服务 {
  /// 返回 tpl-ast-toml 工具的版本号
  版本(): Promise<string>;

  /// 输入 toml 字符串, 返回解析结果
  toml_解析(原始: string): Promise<toml解析结果>;

  /// IO: 读取 `.toml` 文件, 并解析
  toml_加载(文件名: string): Promise<toml解析结果>;

  /// tpld 基本检查 (具体原语言无关)
  /// 输入 toml 数据, 返回检查结果 (警告/错误)
  tpld_检查(原始: toml解析结果): Promise<Array<检查结果>>;

  /// IO: 读取 `.tpld.toml` 文件, 解析, 检查并返回结果
  tpld_加载(文件名: string): Promise<tpld加载结果>;

  /// 标识符替换, 用于源代码处理
  /// 返回: 替换后的字符串
  文本替换(选项: 替换选项): Promise<string>;
}

interface toml解析结果 {
  /// toml 文件所含数据对应的 json 形式
  数据: any;

  // TODO 可能包含更多数据, 用于编辑/生成 toml 文件
}

export enum 检查结果级别 {
  警告,
  错误,
}

interface 检查结果 {
  级别: 检查结果级别;

  描述: string;

  // 错误在文件中对应的行号/列号
  位置?: Array<number>;
}

interface tpld加载结果 {
  检查结果: Array<检查结果>;

  数据: tpld数据;
}

interface tpld数据 {
  // TODO
}

/// 标识符替换输入数据
/// 下面 3 个数组长度必须一致, 否则错误
interface 替换选项 {
  /// 各个待替换标识符在原文件 (字符串) 中的位置
  位置: Array<number>;
  /// 待替换字符串
  原始: Array<string>;
  /// 替换为字符串
  至: Array<string>;
}
