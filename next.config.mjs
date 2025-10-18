import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: { unoptimized: true },
  trailingSlash: true,
  allowedDevOrigins: ['3000-iei0q67ryon4ctssci9d0-c07dda5e.sandbox.novita.ai'],
};

export default withMDX(nextConfig);
