import withMDX from '@next/mdx';
import withPWA from '@ducanh2912/next-pwa';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
});

export default pwaConfig(mdxConfig({
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: { unoptimized: true },
  trailingSlash: true,
}));
