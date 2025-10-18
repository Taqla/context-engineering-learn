import type { ThemeConfig } from 'antd';

export const lobeHubTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    colorBgContainer: '#ffffff',
    colorText: '#262626',
    colorTextSecondary: '#595959',
    colorBorder: '#d9d9d9',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    Layout: {
      siderBg: '#fafafa',
      headerBg: '#ffffff',
      bodyBg: '#ffffff',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: '#e6f4ff',
      itemSelectedColor: '#1677ff',
      itemHoverBg: '#f5f5f5',
      itemActiveBg: '#e6f4ff',
    },
    Collapse: {
      headerBg: '#fafafa',
      contentBg: '#ffffff',
    },
    Tabs: {
      itemActiveColor: '#1677ff',
      itemSelectedColor: '#1677ff',
    },
  },
};
