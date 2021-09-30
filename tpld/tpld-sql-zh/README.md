# tpld-sql-zh

支持级别 [`L0` 尚未支持 ?](../../doc/level.md)

替语言 SQL 中文版 描述文件 (翻译).

关键字参考 <https://sqlite.org/lang_keywords.html>

标准库参考 <https://sqlite.org/lang.html>

## 栗子

```
创建表 读者 (
  编号 整数 主键 自增,
  邮箱 文本 唯一 非空,
  昵称 文本 非空,
  出生年 整数 非空,
);

插入 读者 (邮箱, 昵称, 出生年)
  值 ("test@example.com", "喵喵", 2000);

选择 计数(*)
  从 读者;

更新 读者
  设 出生年 = 2001
其中 昵称 = "喵喵";

删除 读者
其中 出生年 < 2000;

选择 邮箱, 昵称
  从 读者
其中 出生年 > 2000
排序 出生年 降序;

丢弃表 读者;
```

编译为:

```sql
CREATE TABLE 读者 (
  编号 INTEGER PRIMARY KEY AUTOINCREMENT,
  邮箱 TEXT UNIQUE NOT NULL,
  昵称 TEXT NOT NULL,
  出生年 INTEGER NOT NULL,
);

INSERT INTO 读者 (邮箱, 昵称, 出生年)
     VALUES ("test@example.com", "喵喵", 2000);

SELECT count(*)
  FROM 读者;

UPDATE 读者
   SET 出生年 = 2001
 WHERE 昵称 = "喵喵";

DELETE FROM 读者
      WHERE 出生年 < 2000;

  SELECT 邮箱, 昵称
    FROM 读者
   WHERE 出生年 > 2000
ORDER BY 出生年 DESC;

DROP TABLE 读者;
```

## 关键字对照表 (147 个)

| sql               | 替语言     | 备注         |
| :---------------- | :--------- | :----------- |
| ABORT             | 中断       |              |
| ACTION            | 动作       |              |
| ADD               | 加         |              |
| AFTER             | 之后       |              |
| ALL               | 全         |              |
| ALTER             | 修改       |              |
| ALWAYS            | 总是       |              |
| ANALYZE           | 分析       |              |
| AND               | 与         |              |
| AS                | 作         |              |
| ASC               | 升序       |              |
| ATTACH            | 附加       |              |
| AUTOINCREMENT     | 自增       |              |
| BEFORE            | 之前       |              |
| BEGIN             | 开始       |              |
| BETWEEN           | 之间       |              |
| BY                | 按         |              |
| CASCADE           | 级联       |              |
| CASE              | 情况       |              |
| CAST              | 转换       |              |
| CHECK             | 检查       |              |
| COLLATE           | 整理       | ?            |
| COLUMN            | 列         |              |
| COMMIT            | 提交       |              |
| CONFLICT          | 冲突       |              |
| CONSTRAINT        | 限制       |              |
| CREATE            | 创建       |              |
| CROSS             | 交叉       |              |
| CURRENT           | 当前       |              |
| CURRENT_DATE      | 当前日期   |              |
| CURRENT_TIME      | 当前时间   |              |
| CURRENT_TIMESTAMP | 当前时间戳 |              |
| DATABASE          | 数据库     |              |
| DEFAULT           | 默认       |              |
| DEFERRABLE        |            |              |
| DEFERRED          |            |              |
| DELETE            | 删         |              |
| DESC              | 降序       |              |
| DETACH            | 断开       |              |
| DISTINCT          | 不同       |              |
| DO                | 干         |              |
| DROP              | 丢弃       |              |
| EACH              | 每一       |              |
| ELSE              | 另         |              |
| END               | 结束       |              |
| ESCAPE            | 转义       |              |
| EXCEPT            | 除了       |              |
| EXCLUDE           | 排除       |              |
| EXCLUSIVE         | 独占       |              |
| EXISTS            | 存在       |              |
| EXPLAIN           | 解释       |              |
| FAIL              | 失败       |              |
| FILTER            | 过滤       |              |
| FIRST             | 首个       |              |
| FOLLOWING         | 接下来     |              |
| FOR               | 为         |              |
| FOREIGN           | 外来       |              |
| FROM              | 从         |              |
| FULL              | 满         |              |
| GENERATED         | 生成的     |              |
| GLOB              | 球         | ?            |
| GROUP             | 组         |              |
| GROUPS            | 组们       |              |
| HAVING            | 有         | ?            |
| IF                | 若         |              |
| IGNORE            | 忽略       |              |
| IMMEDIATE         | 立刻       |              |
| IN                | 在         |              |
| INDEX             | 索引       |              |
| INDEXED           | 索引的     |              |
| INITIALLY         | 最初       |              |
| INNER             | 内         |              |
| INSERT            | 插         |              |
| INSTEAD           | 替代       |              |
| INTERSECT         | 交错       |              |
| INTO              | 入         |              |
| IS                | 是         |              |
| ISNULL            | 是空       |              |
| JOIN              | 连接       |              |
| KEY               | 键         |              |
| LAST              | 最后       |              |
| LEFT              | 左         |              |
| LIKE              | 像         |              |
| LIMIT             | 限         |              |
| MATCH             | 匹配       |              |
| MATERIALIZED      | 材料化     |              |
| NATURAL           | 自然       |              |
| NO                | 不         |              |
| NOT               | 非         |              |
| NOTHING           | 无         |              |
| NOTNULL           | 不是空     |              |
| NULL              | 空         |              |
| NULLS             | 空们       |              |
| OF                | 的         | ?            |
| OFFSET            | 偏移       |              |
| ON                | 于         | ?            |
| OR                | 或         |              |
| ORDER             | 顺序       |              |
| OTHERS            | 其余       |              |
| OUTER             | 外         |              |
| OVER              | 通过       |              |
| PARTITION         | 分区       |              |
| PLAN              | 计划       |              |
| PRAGMA            | 指示       |              |
| PRECEDING         | 前的       |              |
| PRIMARY           | 主         |              |
| QUERY             | 查询       |              |
| RAISE             | 扔         | 类似 `throw` |
| RANGE             | 范围       |              |
| RECURSIVE         | 递归       |              |
| REFERENCES        | 引用       |              |
| REGEXP            | 正则       |              |
| REINDEX           | 重索引     |              |
| RELEASE           | 释放       |              |
| RENAME            | 重命名     |              |
| REPLACE           | 替换       |              |
| RESTRICT          | 限制       |              |
| RETURNING         | 正返回     |              |
| RIGHT             | 右         |              |
| ROLLBACK          | 回滚       |              |
| ROW               | 行         |              |
| ROWS              | 行们       |              |
| SAVEPOINT         | 保存点     |              |
| SELECT            | 选择       |              |
| SET               | 设         |              |
| TABLE             | 表         |              |
| TEMP              | 临         |              |
| TEMPORARY         | 临时       |              |
| THEN              | 然后       |              |
| TIES              | 系         |              |
| TO                | 至         |              |
| TRANSACTION       | 事务       |              |
| TRIGGER           | 触发器     |              |
| UNBOUNDED         | 未限制     |              |
| UNION             | 联合       |              |
| UNIQUE            | 唯一       |              |
| UPDATE            | 更新       |              |
| USING             | 用         |              |
| VACUUM            | 清洁       |              |
| VALUES            | 值         |              |
| VIEW              | 视图       |              |
| VIRTUAL           | 虚         |              |
| WHEN              | 当         | 没有 `while` |
| WHERE             | 其中       |              |
| WINDOW            | 窗口       |              |
| WITH              | 同         |              |
| WITHOUT           | 没有       |              |

数据类型:

| sql     | 替语言 | 备注 |
| :------ | :----- | :--- |
| NULL    | 空     |      |
| INTEGER | 整数   |      |
| REAL    | 实数   |      |
| TEXT    | 文本   |      |
| BLOB    | 大块   |      |
| NUMERIC | 数字   |      |

多关键字缩写:

| sql          | 替语言 | 备注 |
| :----------- | :----- | :--- |
| CREATE TABLE | 创建表 |      |
| DELETE FROM  | 删除   |      |
| DROP TABLE   | 丢弃表 |      |
| FOREIGN KEY  | 外键   |      |
| GROUP BY     | 分组   |      |
| INSERT INTO  | 插入   |      |
| NOT NULL     | 非空   |      |
| ORDER BY     | 排序   |      |
| PRIMARY KEY  | 主键   |      |

TODO
