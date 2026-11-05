---
title: 音乐源插件开发
description: 使用 MeloX Plugin SDK 开发、打包和管理动态音乐源
---

# MeloX 音乐源插件（RC 开发预览）

插件作者负责将获授权的第三方 API 转换为 MeloX 的标准模型；宿主提供受限网络、普通存储、账号管理与播放接线。API 保持 v1。当前为 RC 开发预览，不代表所有设备、第三方服务或安全场景已完成验收。

- [SDK 使用、示例与打包](./sdk.md)
- [API v1 协议与能力](./protocol-v1.md)
- [运行时、生命周期和安全边界](./runtime-and-security.md)
- [Manifest Schema](./manifest.schema.json) 与 [Protocol Schema](./protocol-v1.schema.json)

## 当前支持范围

Android 宿主源码已接入 search、playback、lyrics、playlists、albums、artists、rankings、homeFeed、userLibrary、favorites、download 和 authentication。插件可选择声明实际实现的能力。Token 和 OAuth2 授权码 + PKCE 使用宿主管理的账号；仅支持渐进式媒体，HLS、DASH 和 DRM 不支持。

SDK 是 MeloX-Android 仓库中的开发包，尚未发布到 npm。构建 SDK 成功不等于插件在设备上通过验收。API 35 转译模拟器已完成实际签名包导入、搜索、正常服务播放、歌词/队列和后台/熄屏子集；API 24、实体设备完整矩阵、真实 OAuth 浏览器回调、受控网络和旧版迁移仍待验收。具体结果请查 [验证记录](https://github.com/lladlam/MeloX-Android/blob/main/docs/plugin-system/verification.md)。
