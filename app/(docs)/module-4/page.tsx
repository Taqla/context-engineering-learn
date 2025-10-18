'use client';

import dynamic from 'next/dynamic';

const Module4Content = dynamic(() => import('@/app/(docs)/module-4/content.mdx'), {
  ssr: false,
});

export default function Module4Page() {
  return (
    <div className="module-content">
      <Module4Content />
    </div>
  );
}
