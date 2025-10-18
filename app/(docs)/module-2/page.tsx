'use client';

import dynamic from 'next/dynamic';

const Module2Content = dynamic(() => import('@/app/(docs)/module-2/content.mdx'), {
  ssr: false,
});

export default function Module2Page() {
  return (
    <div className="module-content">
      <Module2Content />
    </div>
  );
}
