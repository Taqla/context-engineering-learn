'use client';

import dynamic from 'next/dynamic';

const Module6Content = dynamic(() => import('@/app/(docs)/module-6/content.mdx'), {
  ssr: false,
});

export default function Module6Page() {
  return (
    <div className="module-content">
      <Module6Content />
    </div>
  );
}
