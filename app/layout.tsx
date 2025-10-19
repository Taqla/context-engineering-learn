'use client';

import { ConfigProvider, Layout } from 'antd';
import { lobeHubTheme } from '@/styles/lobehub-theme';
import DocsSidebar from '@/components/DocsSidebar';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Context Engineering Learning Platform</title>
        <meta name="description" content="Master context engineering from fundamentals to meta-recursion" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1677ff" />
      </head>
      <body>
        <ConfigProvider theme={lobeHubTheme}>
          <Layout style={{ minHeight: '100vh' }}>
            <Layout.Sider width={280} theme="light" style={{ position: 'fixed', height: '100vh', overflow: 'auto' }}>
              <DocsSidebar />
            </Layout.Sider>
            <Layout style={{ marginLeft: 280 }}>
              <Layout.Content style={{ padding: '24px 48px' }}>
                <div className="mdx-content">{children}</div>
              </Layout.Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
