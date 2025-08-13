# **H3C 智算服务平台门户**

## 项目架构

⎋ 前端框架：Nextjs  
css 框架：TailwindCss

## 项目脚本

```bash
# 安装依赖
npm install

# 运行项目
npm run dev
```

## 技术亮点（后续相继实现）

- 微前端架构
- 性能优化，包大小控制
- 复杂状态管理
- ssr 加快首屏

- pm2 自动化部署
- docker 部署
- axios 封装
- antd css-in-js 解决
- shell 脚本自动化部署

## 代码规范

1. 路由页面均放置于 app 文件夹内，并以页面语义化英文编写文件夹名称（kebeb-case）
2. 样式尽量采用 tailwindcss 编写，如果遇到 tailwind 无法处理的样式问题，采用 page.module.css 的模块化样式代码编写
3. 目录层级按照页面层级严格排版，防止后期寻找页面耗时
4. 通用样式均放置于 styles 文件夹内
5. 所有环境变量区分开发环境与生产环境，写至.env.xxx 文件下

## 项目部署手册

1. 项目采用 pm2 部署与管理，pm2 start
2. 项目和浩鲸平台均通过 nginx 反向代理至 9000 端口，以防止跨域问题
3. 项目 docker 部署文件为 dockerfile

## 完整开发流设计

1. 完整的开发工作流：
2. 编写代码 → ESLint 实时检查
3. 保存文件 → Prettier 自动格式化
4. Git 提交 → Husky + lint-staged 自动检查
5. 构建前 → 完整的代码质量检查
6. 部署前 → 类型检查和测试
