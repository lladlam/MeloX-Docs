# MeloX Docs

弥乐 Android 用户帮助文档，基于 Docusaurus 3 构建，计划部署到腾讯云 EdgeOne Pages：<https://md.lladlam.top>。

## 本地开发

```bash
npm ci
npm start
```

## 生产构建与部署

```bash
npm run build
npm run serve
```

Docusaurus 生成的静态文件位于 `build/`。EdgeOne Pages 项目构建配置：

- 构建命令：`npm ci && npm run build`
- 输出目录：`build`
- Node.js：20 或更高版本

部署需在腾讯云 EdgeOne Pages 控制台授权 GitHub 并导入 `lladlam/MeloX-Docs` 仓库；绑定自定义域名后，按控制台提示配置 `md.lladlam.top` 的 DNS 记录和 HTTPS。

## 文档编辑

- 用户文档位于 `docs/`，导航在 `sidebars.ts`。
- 中文是当前默认语言。更改通过 GitHub Pull Request 审核后合并。
- “如何有效反馈问题”参考并改写自 [《提问的智慧》中文指南](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)，该页面注明来源及上游支持声明。

## 许可证与联系

弥乐 Android 项目使用 GPL-3.0-or-later。第三方引用页面可能有独立的版权和许可声明；请以对应原始来源为准。

- 应用仓库：[lladlam/MeloX-Android](https://github.com/lladlam/MeloX-Android)
- 问题反馈：[GitHub Issues](https://github.com/lladlam/MeloX-Android/issues)
