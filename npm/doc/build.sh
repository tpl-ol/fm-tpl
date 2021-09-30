#!/bin/bash
# TODO 使用 nsh 重写

# 清理
mkdir -p fm-tpl
rm -r fm-tpl

# 复制文件
mkdir -p fm-tpl
cd fm-tpl
cp ../../doc .
cp ../../logo .
cp ../../tpl-spec .
cp ../../tpl-tool .
cp ../../tpld .
cp ../../README.md .
cp ../../LICENSE .
cp ../../LICENSE ..

# 移除空文件
find . -type f -empty -print -delete
# 移除空目录
find . -type d -empty -print -delete
