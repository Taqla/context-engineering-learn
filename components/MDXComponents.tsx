import { Typography } from 'antd';
import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <Typography.Title level={1}>{children}</Typography.Title>,
  h2: ({ children }) => <Typography.Title level={2}>{children}</Typography.Title>,
  h3: ({ children }) => <Typography.Title level={3}>{children}</Typography.Title>,
  h4: ({ children }) => <Typography.Title level={4}>{children}</Typography.Title>,
  p: ({ children }) => <Typography.Paragraph>{children}</Typography.Paragraph>,
  code: ({ children }) => <code>{children}</code>,
  pre: ({ children }) => <pre>{children}</pre>,
};
