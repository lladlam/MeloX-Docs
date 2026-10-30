---
title: 平台与版本状态
sidebar_position: 2
---

# 平台与版本状态

本指南覆盖 MeloX 项目维护的 **Android、Windows 和 Linux** 客户端。它们是独立平台实现，功能完成度、界面入口、系统要求和发布节奏各不相同；某个平台的操作步骤不一定适用于其他平台。

## Android

- **项目**：[MeloX-Android](https://github.com/lladlam/MeloX-Android)
- **状态**：提供正式版；本文档的 Android 专属指南以 Android **0.7.1** 为版本基线。
- **下载**：[GitHub Releases](https://github.com/lladlam/MeloX-Android/releases/latest)
- **适用文档**：[下载与安装](installation)、[首次启动](first-launch)、[USB 独占输出](usb-audio)、[DLNA 与 MiPlay](device-output)。
- **问题反馈**：[MeloX-Android Issues](https://github.com/lladlam/MeloX-Android/issues)。

## Windows

- **项目**：[MeloX-Windows](https://github.com/lladlam/MeloX-Windows)
- **状态**：早期开发和功能迁移中。共享业务层已迁移一部分，桌面 UI 与音频后端仍在完善；README 提供迁移矩阵，可查看各项状态。目标平台包括 Windows、macOS 与 Linux，但本指南只覆盖本项目实际维护的 Windows/Linux 发行方向。
- **下载与构建**：请查看项目 README 和 [Releases](https://github.com/lladlam/MeloX-Windows/releases) 当前提供的产物；若没有适用于你的正式安装包，不要将 Android APK 当作桌面安装包。
- **问题反馈**：[MeloX-Windows Issues](https://github.com/lladlam/MeloX-Windows/issues)。报告时注明 Windows 版本、应用构建来源以及迁移矩阵中相关功能状态。

## Linux

- **项目**：[MeloX-Linux](https://github.com/lladlam/MeloX-Linux)
- **状态**：开发中。项目以 Arch Linux x86_64 为主要目标，并在 Arch Linux KDE Wayland 环境进行启动验证；其他发行版兼容性和完整功能仍在验证。项目 README 描述了 AppImage 路线，但应以仓库当前 Releases/README 是否已有可下载构建为准。
- **下载与构建**：查看 [项目 README](https://github.com/lladlam/MeloX-Linux#readme) 和 [Releases](https://github.com/lladlam/MeloX-Linux/releases)。从源码构建需要按 README 准备 Git LFS、JDK 和系统图形依赖。
- **问题反馈**：[MeloX-Linux Issues](https://github.com/lladlam/MeloX-Linux/issues)。请注明发行版、桌面环境（X11/Wayland）、CPU 架构、音频设备和构建来源。

## 文档适用范围

目前详细的安装、权限、设备输出和日志步骤主要针对 **Android**。Windows/Linux 与 Android 共享部分音乐服务和业务模型，但桌面系统的登录持久化、文件位置、键盘操作、音频输出、系统媒体控制和歌词浮窗行为不同，不能直接套用 Android 设置路径。

跨平台指南描述概念或服务行为时，会注明平台差异；没有经过对应平台验证的细节，以该平台仓库的 README、迁移矩阵和版本说明为准。遇到问题请提交到发生问题的平台仓库，避免只在 Android 项目报告桌面端故障。

## 项目边界

本指南不覆盖独立维护的 iOS/macOS 客户端。MeloX-Android README 将 iOS/macOS 项目标注为由其他维护者开发；若你使用该客户端，请以其自身仓库和发布渠道的说明为准，不要将该项目状态或支持入口与 Android、Windows、Linux 项目混为一谈。
