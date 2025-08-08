#!/bin/bash

# 1、项目配置
REPO_URL="https://github.com/yx535233092/h3c_intelligent_computing_portal.git"
DEPLOY_PATH="/workspace/workspace/yx/h3c-portal"
BRANCH="master"

echo "------正在开始部署h3c-portal项目------"

# 2、检查并克隆代码
if [ ! -d "$DEPLOY_PATH" ]; then
  echo "------项目目录不存在，开始克隆代码------"
  git clone -b $BRANCH $REPO_URL $DEPLOY_PATH
else
  echo "------项目目录已存在，开始拉取最新代码------"
  cd $DEPLOY_PATH
  git pull origin $BRANCH
fi

cd "$DEPLOY_PATH" || exit

# 3、安装依赖和构建项目
echo "------正在安装依赖------"
npm install

echo "------正在构建------"
npm run build

# 4、启动/重启项目
pm2 describe h3c-portal > /dev/null
if [ $? -ne 0 ]; then
  echo "------ 正在首次启动 PM2 应用 ------"
  npm run start
else
  echo "------ 正在重启 PM2 应用 ------"
  pm2 reload ecosystem.config.js
fi

echo "------ 部署完成！ ------"