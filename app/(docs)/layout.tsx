'use client';

import { Layout } from 'antd';
import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
