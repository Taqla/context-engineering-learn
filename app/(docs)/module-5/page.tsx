'use client';

import dynamic from 'next/dynamic';

const Module5Content = dynamic(() => import('@/app/(docs)/module-5/content.mdx'), {
  ssr: false,
});

export default function Module5Page() {
  return (
    <div className="module-content">
      <Module5Content />
    </div>
  );
}
