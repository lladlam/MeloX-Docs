# Plugin API v1：协议与能力

API v1 使用标准 JSON 对象；插件负责平台字段和错误转换，宿主不直接读取第三方平台响应。SDK 的 [TypeScript 接口](https://github.com/lladlam/MeloX-Android/blob/main/plugin-sdk/src/types.ts)、[Manifest schema](./manifest.schema.json) 和 [响应 schema](./protocol-v1.schema.json) 定义字段；实际网络权限、资源上限和跨字段条件由宿主另行检查。

## 能力与必需方法

| Manifest capability | 插件方法 |
| --- | --- |
| search | `search` |
| playback | `resolvePlayback` |
| lyrics | `lyrics` |
| playlists | `playlists`, `searchPlaylists`, `playlistDetail` |
| albums | `searchAlbums`, `albumDetail` |
| artists | `searchArtists`, `artistDetail` |
| rankings | `rankings`, `rankingTracks` |
| homeFeed | `homeFeed` |
| userLibrary | `accountSummary`, `userPlaylists`, `savedAlbums`, `followedArtists` |
| favorites | `isFavorite`, `setFavorite` |
| download | `resolveDownload` |
| authentication | `authenticationStatus` |

只声明插件实际实现的能力；启用前宿主检查声明的方法。方法参数以 SDK 类型为准，`host` 始终是最后一个参数。参考 [catalog 示例](https://github.com/lladlam/MeloX-Android/tree/main/plugin-sdk/examples/catalog)。

## Manifest 与数据

`id` 是小写分段标识，宿主生成 `plugin:` SourceId；`version` 为 SemVer，`apiVersion` 为数字 `1`，`entry` 是 ZIP 内相对 JS 路径。`networkDomains` 只允许精确声明的 HTTPS 主机；账号域名还需符合 authentication 配置。宿主以插件 SourceId 绑定歌曲、歌手和专辑身份。

分页从 1 开始，pageSize 为 1–100，响应必须匹配请求并明确 `hasMore`；时间为毫秒，码率为 bit/s。`resolvePlayback`/`resolveDownload` 返回标准播放状态，渐进式 playable URL 和每次请求的 headers；可请求 `credential: "active"`，凭据由宿主按声明域名注入。HLS、DASH 和 DRM 不受支持。

歌词使用按时间排序的行，包含 `timeMs`、`text`，可选翻译和罗马音。目录、推荐、收藏及下载的精确字段和可空性请以 schema 与 SDK 类型为准。共享 fixture 已用于 Kotlin、Schema 和隔离 QuickJS 子集；模型尚非代码生成，不能推断任意恶意输入均已覆盖。

## 认证与错误

支持 `none`、`apiToken` 和 `oauth2Pkce`。OAuth 只支持公开客户端授权码 + S256 PKCE、系统浏览器和固定回调 `com.lladlam.melox.plugin:/oauth2redirect`；不支持 client secret、设备码或 WebView/Cookie 登录。宿主不向脚本暴露 Token，插件通过 `host.account` 获取不含凭据的账号摘要。真实浏览器及公网服务端到端验收仍待执行。

通过 `PluginError` 返回受控错误码；不要把 Token、URL 参数或上游异常正文写入错误与日志。参见 [SDK 使用](./sdk.md) 和 [运行时安全](./runtime-and-security.md)。
