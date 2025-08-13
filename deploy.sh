#!/bin/bash

# 1、项目配置
# 仓库 URL
REPO_URL_GITEE="https://gitee.com/yx0208/yz-intelligent-computing-portal.git"
REPO_URL_GITHUB="https://github.com/yx535233092/yz-intelligent-computing-portal.git"
# 项目部署路径
DEPLOY_PATH="/workspace/workspace/yx/h3c-portal"

echo "------正在开始部署前端h3c-portal项目------"

read -p "请输入要部署的仓库类型(gitee/github): " REPO_TYPE
if [ "$REPO_TYPE" == "gitee" ]; then
  REPO_URL=$REPO_URL_GITEE
elif [ "$REPO_TYPE" == "github" ]; then
  REPO_URL=$REPO_URL_GITHUB
else
  echo "错误：未指定仓库类型。部署中止。"
  exit 1
fi

# 2、让用户输入要部署的版本 (分支或标签)
# 提示用户输入，并将输入存储到 GIT_VERSION_REF 变量中
read -p "请输入要部署的分支名或标签名 (例如: master, dev, v1.0.0, 20250813): " GIT_VERSION_REF

# 检查用户是否输入了内容
if [ -z "$GIT_VERSION_REF" ]; then
  echo "错误：未指定版本名。部署中止。"
  exit 1
fi

echo "------您选择了部署版本：$GIT_VERSION_REF ------"

# 3、检查并克隆/更新代码
if [ ! -d "$DEPLOY_PATH" ]; then
  echo "------项目目录不存在，开始克隆代码------"
  # 克隆整个仓库
  git clone "$REPO_URL" "$DEPLOY_PATH"
  # 切换到部署目录
  cd "$DEPLOY_PATH" || { echo "错误：无法进入部署目录 '$DEPLOY_PATH'，请检查路径或权限。"; exit 1; }

  # 检出指定的版本
  echo "------检出指定版本 '$GIT_VERSION_REF' ------"
  if ! git checkout "$GIT_VERSION_REF"; then
    echo "错误：无法检出版本 '$GIT_VERSION_REF'。请检查分支名或标签名是否正确。"
    exit 1
  fi
else
  echo "------项目目录已存在，开始更新到指定版本------"
  # 切换到部署目录
  cd "$DEPLOY_PATH" || { echo "错误：无法进入部署目录 '$DEPLOY_PATH'，请检查路径或权限。"; exit 1; }

  # 清理本地工作区，重置为最新提交
  echo "------清理本地工作区，重置为最新提交------"
  git reset --hard HEAD
  git clean -df

  # 获取所有远程分支和标签信息
  echo "------获取最新远程引用 (分支和标签)------"
  if ! git fetch origin --tags; then
    echo "错误：无法获取远程Git引用。请检查网络连接或仓库配置。"
    exit 1
  fi

  # 检出指定的版本（分支或标签）
  echo "------检出指定版本 '$GIT_VERSION_REF' ------"
  if ! git checkout "$GIT_VERSION_REF"; then
    echo "错误：无法检出版本 '$GIT_VERSION_REF'。请检查分支名或标签名是否正确。"
    exit 1
  fi

  # 判断当前检出的是否是分支，如果是分支，则尝试拉取最新代码
  if git show-ref --verify --quiet "refs/heads/$GIT_VERSION_REF" || git show-ref --verify --quiet "refs/remotes/origin/$GIT_VERSION_REF"; then
    echo "------'$GIT_VERSION_REF' 是一个分支，尝试拉取最新代码------"
    if ! git pull origin "$GIT_VERSION_REF"; then
      echo "警告：无法拉取最新代码。这可能意味着本地已是最新，或网络问题。如果当前已是最新，此警告可忽略。"
    fi
  else
    echo "------'$GIT_VERSION_REF' 是一个标签，跳过git pull------"
  fi
fi

# 确保当前目录是部署目录
cd "$DEPLOY_PATH" || { echo "再次确认：无法进入部署目录 '$DEPLOY_PATH'，退出！"; exit 1; }

# 4、安装依赖和构建项目
echo "------正在安装依赖------"
if [ -f "package-lock.json" ]; then
  npm install --omit=dev
elif [ -f "yarn.lock" ]; then
  yarn install --production
else
  npm install --omit=dev
fi

echo "------正在构建项目------"
if npm run build; then
  echo "------项目构建成功！------"
else
  echo "错误：项目构建失败！请检查构建脚本或依赖问题。"
  exit 1
fi

# 5、启动/重启项目 (使用 PM2)
echo "------检查 PM2 应用状态------"
pm2 describe h3c-portal > /dev/null
if [ $? -ne 0 ]; then
  echo "------ 正在首次启动 PM2 应用 'h3c-portal' ------"
  if pm2 start ecosystem.config.js; then
    echo "------ PM2 应用 'h3c-portal' 首次启动成功！------"
  else
    echo "错误：PM2 应用 'h3c-portal' 首次启动失败！请检查 PM2 配置。"
    exit 1
  fi
else
  echo "------ 正在重启 PM2 应用 'h3c-portal' ------"
  if pm2 reload ecosystem.config.js --update-env; then
    echo "------ PM2 应用 'h3c-portal' 重启成功！------"
  else
    echo "错误：PM2 应用 'h3c-portal' 重启失败！"
    exit 1
  fi
fi

echo "------ 部署完成！ ------"
