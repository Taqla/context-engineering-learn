declare module '*.mdx' {
  import { MDXProps } from 'mdx/types';
  export default function MDXContent(props: MDXProps): JSX.Element;
}

declare module '@/content/modules/*.mdx' {
  import { MDXProps } from 'mdx/types';
  export default function MDXContent(props: MDXProps): JSX.Element;
}
