import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chan.cwallpaper',
  name: '图凌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="activate_button"]',
      snapshotUrls: 'https://i.gkd.li/i/14293734',
    },
    {
      key: 1,
      name: '全屏广告-会员回馈弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.chan.cwallpaper.module.main.MainActivity',
          matches: '[vid="ivClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8150c450-bcf8-4e8b-8236-4c3abebbeef3',
          snapshotUrls: 'https://i.gkd.li/i/14308433',
        },
      ],
    },
  ],
});
