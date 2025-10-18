'use client';

import { ConfigProvider } from 'antd';
import { lobeHubTheme } from '@/styles/lobehub-theme';
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
        <ConfigProvider theme={lobeHubTheme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
