import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '开始使用',
      items: ['start', 'installation', 'first-launch'],
    },
    {
      type: 'category',
      label: '功能指南',
      items: ['music-sources', 'playback-and-lyrics', 'downloads', 'device-output', 'lan-cast', 'usb-audio'],
    },
    {
      type: 'category',
      label: '帮助与支持',
      items: ['troubleshooting', 'asking-for-help', 'privacy-and-logs', 'faq'],
    },
  ],
};

export default sidebars;
