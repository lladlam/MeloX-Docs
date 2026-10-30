---
title: 下载与安装
sidebar_position: 2
---

# 下载与安装

## 下载正式版

前往 [GitHub Releases](https://github.com/lladlam/MeloX-Android/releases/latest) 下载最新正式版。发布页提供按 CPU 架构拆分的 APK：

- `arm64-v8a`：绝大多数近年 Android 手机和平板使用此版本。
- `armeabi-v7a`：仅用于仍运行 32 位系统或 32 位应用环境的设备。

不确定设备架构时，可先尝试 `arm64-v8a`；若系统提示不兼容，再使用 `armeabi-v7a`。请勿同时安装两个架构版本。

## 安装与升级

1. 从 GitHub Releases 下载 APK。
2. 在系统提示时允许浏览器或文件管理器安装应用。
3. 打开 APK 并按 Android 系统提示完成安装。

正式版使用固定的 MeloX 发布签名。保持正式包名与签名一致时，新版本可直接覆盖旧正式版，应用数据会保留。

## 正式版与开发版

开发版发布在 [`dev-latest`](https://github.com/lladlam/MeloX-Android/releases/tag/dev-latest)，用于体验尚未进入正式版的改动。开发版使用 Android debug 签名，与正式版签名不同：**不能覆盖安装在正式版之上**。开发版也可能存在未完成或回归问题。

## 安装失败时

- 确认下载文件完整，并且架构与设备兼容。
- 若提示签名冲突，当前安装包与下载包可能分别是正式版和开发版。Android 不允许不同签名的应用互相覆盖；卸载会清除该应用本地数据，请先确认数据已备份。
- 若系统提示空间不足，请释放存储空间后重试。
- 从非官方渠道下载的 APK 无法保证与正式发布文件相同，建议使用 GitHub Releases。
