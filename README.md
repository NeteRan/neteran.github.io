# NeteRan 的技术博客

基于 [VitePress](https://vitepress.dev/) 构建的个人技术博客，发布在 [neteran.github.io](https://neteran.github.io)。

## 内容分类

- 🚩 **CTF Writeup** —— `docs/ctf/`
- 🧩 **算法题解** —— `docs/algo/`
- 📚 **学习笔记** —— `docs/notes/`
- 💻 **代码项目** —— `docs/projects/`

## 本地开发

```bash
# 安装依赖
npm install

# 启动本地预览（默认 http://localhost:5173）
npm run dev

# 构建
npm run build
```

## 发布

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 写作指南

1. 在对应分类目录下新建 `.md` 文件
2. 在 `.vitepress/config.mts` 的 `sidebar` 中注册新文章
3. 提交并推送到 GitHub

> 支持 Markdown 的全部特性：代码高亮、提示框（tip/warning/danger）、表格、图片等。
