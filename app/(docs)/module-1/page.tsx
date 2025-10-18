'use client';

import dynamic from 'next/dynamic';

const Module1Content = dynamic(() => import('@/app/(docs)/module-1/content.mdx'), {
  ssr: false,
});

export default function Module1Page() {
  return (
    <div className="module-content">
      <Module1Content />
    </div>
  );
}
