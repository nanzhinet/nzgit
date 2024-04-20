import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pywm.fund',
  name: '普益基金',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text="立即更新"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/13327271',
        },
      ],
    },
  ],
});