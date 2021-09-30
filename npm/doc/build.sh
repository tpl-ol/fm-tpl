#!/bin/bash
# TODO 使用 nsh 重写

# 清理
mkdir -p fm-tpl
rm -r fm-tpl

# 复制文件
mkdir -p fm-tpl
cd ../..
cp -r doc logo tpl-spec tpl-tool tpld README.md npm/doc/fm-tpl
cp LICENSE npm/doc/
cp LICENSE npm/doc/fm-tpl
cd npm/doc/fm-tpl

# 移除空文件
find . -type f -empty -print -delete
# 移除空目录
find . -type d -empty -print -delete
