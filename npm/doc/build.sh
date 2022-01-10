#!/usr/bin/env 壳 --壳
# 构建脚本, 使用 nsh

# 清理
建目录 -确 fm-tpl
删除 --递归 fm-tpl

# 复制文件
建目录 -确 fm-tpl
去 ../..
复制 --递归 doc logo tpl-spec tpl-tool tpld README.md npm/doc/fm-tpl
复制 LICENSE npm/doc/
复制 LICENSE npm/doc/fm-tpl
去 npm/doc/fm-tpl

# 清理空文件
递归删除空文件 --显示 .
递归删除空目录 --显示 .
