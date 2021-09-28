# 替语言工具的工作模式与项目结构

+ **并列模式** (side-by-side)

  编译后的文件放在原文件旁边, 项目目录结构与原来相同.
  
  并列模式适合混合使用替语言/原语言的项目.

  比如 `XXX.ts.替` 与编译后生成的 `XXX.ts` 文件放在同一个目录.

  ```
  (tpld-ts-zh)

  - tpl_config.toml
  - package.json
  + src/
    - main.ts
    - 主.ts.替
  ```

+ **影子模式** (shadow)

  编译后的文件放在 `shadow` 目录中, 因此可重新构造项目目录结构.

  影子模式适合完全使用替语言的项目, 能够提供更加符合目标语言的使用习惯.

  ```
  (tpld-ts-zh)

  - 替语言配置.toml.替
  - 包.json.替
  + 源/
    - 主.ts.替

  + shadow/
    - tpl_config.toml
    - package.json
    + src/
      - main.ts
  ```
