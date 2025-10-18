import { ConfigProvider } from 'antd';
import { lobeHubTheme } from '@/styles/lobehub-theme';
import '@/styles/globals.css';

export const metadata = {
  title: 'Context Engineering Learning Platform',
  description: 'Master context engineering from fundamentals to meta-recursion',
  manifest: '/manifest.json',
  themeColor: '#1677ff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={lobeHubTheme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
