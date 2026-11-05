---
title: 音乐源插件开发
description: 使用 MeloX Plugin SDK 开发、打包和管理动态音乐源
---

# MeloX 音乐源插件（开发预览）

本指南面向希望将音乐平台适配到 MeloX 的开发者。**当前插件系统处于开发预览阶段**：Android 核心接线和自动化测试已完成，尚未经过真实 Android 设备端到端验证。

插件作者负责调用获授权的第三方 API，并将歌曲、播放结果、歌词和平台错误转换为 MeloX 标准协议。MeloX 宿主只验证标准数据并连接现有搜索、Media3 播放和歌词 UI，不负责平台字段转换。

## 开发文档

- [SDK 使用、插件代码与打包](./sdk.md)
- [API v1 协议、Manifest 与数据模型](./protocol-v1.md)
- [生命周期、运行时与安全边界](./runtime-and-security.md)
- 示例插件：`plugin-sdk/examples/test-tone/`（MeloX 仓库；原创 CC0 440 Hz 测试音）

## 当前状态

Manifest 目前支持 `search`、`playback`、`lyrics` 三项能力。导入、启用、更新、禁用、卸载、应用启动恢复、动态搜索和插件播放接线均已实现，并有自动化测试覆盖。

认证、多账号与凭据保险箱、歌单/专辑/歌手/音乐库等能力尚未接入。请勿将预备的 SDK 类型误认为宿主已实现。插件图片请求暂不开放；渐进式媒体播放已接入受限网络 DataSource，但尚无设备实测结果。

## 验证声明

当前代码的 Gradle 检查通过 478 项测试（3 项跳过）；SDK 类型检查、构建和 4 项测试通过。SDK 打包产物已由 Kotlin 插件包读取器接受，CC0 示例音频也已通过公开测试服务实际请求验证。这些结果不等同于 Android 设备安装、隔离运行时、Media3 播放和歌词界面端到端验证。

请阅读[运行时安全说明](./runtime-and-security.md)及其限制后再运行第三方代码。
