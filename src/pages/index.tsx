import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/start">
            开始使用弥乐
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Android 使用指南"
      description="弥乐 Android 音乐播放器的下载、使用、设备连接和故障排查文档。">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4"><h2>快速入门</h2><p>下载正确架构的 APK，完成首次启动并添加音源。</p><Link to="/docs/installation">下载与安装 →</Link></div>
            <div className="col col--4"><h2>音乐与播放</h2><p>了解内置音源、第三方脚本、播放音质和歌词。</p><Link to="/docs/music-sources">音源指南 →</Link></div>
            <div className="col col--4"><h2>设备与帮助</h2><p>设置局域网一起放、USB 输出，或按步骤排查问题。</p><Link to="/docs/troubleshooting">故障排查 →</Link></div>
          </div>
          <div className="alert alert--warning margin-top--lg" role="alert">
            弥乐是非官方开源项目。第三方音乐源依赖外部服务；USB 独占输出仍为实验性功能，兼容范围有限。
          </div>
        </section>
      </main>
    </Layout>
  );
}
