# tpld-ts-node-zh

替语言 TypeScript 中文版 描述文件:
[node.js](https://nodejs.org/) 运行环境.

定义参考 `@types/node 16.7.6`
<https://www.npmjs.com/package/@types/node>

注意:

+ 不翻译已废弃的 API (`@deprecated`)

+ 不翻译实验性 API (`@experimental`)


## 模块支持列表

完全支持的模块: (18)

| 名称 | 备注 |
| :--- | :-- |
| `buffer` | |
| `child_process` | |
| `console` | |
| `events` | |
| `fs` | |
| `globals` | |
| `module` | |
| `os` | |
| `path` | |
| `process` | |
| `readline` | |
| `repl` | |
| `stream` | |
| `string_decoder` | |
| `timers` | |
| `tty` | |
| `wasi` | |
| `worker_threads` | |

部分支持的模块: (13)

| 名称 | 备注 |
| :--- | --: |
| `constants` | |
| `util` | 1556 行 |
| `vm` | 504 行 |
| `v8` | 378 行 |
| `querystring` | 131 行 |
| `url` | 798 行 |
| `dgram` | 545 行 |
| `perf_hooks` | 555 行 |
| `dns` | 643 行 |
| `net` | 783 行 |
| `assert` | 912 行 |
| `http` | 1358 行 |
| `https` | 391 行 |

暂未支持的模块: (9)

| 名称 | 备注 |
| :--- | --: |
| `inspector` | 2738 行 |
| `crypto` | 3158 行 |
| `http2` | 2100 行 |
| `tls` | 1018 行 |
| `zlib` | 517 行 |
| `cluster` | 414 行 |
| `async_hooks` | 497 行 |
| `diagnostics_channel` | 128 行 |
| `trace_events` | 161 行 |


明确不支持的模块 (比如已废弃): (2)

| 名称 | 备注 |
| :--- | --: |
| `domain` | |
| `punycode` | |


TODO
