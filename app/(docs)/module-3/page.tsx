'use client';

import dynamic from 'next/dynamic';

const Module3Content = dynamic(() => import('@/app/(docs)/module-3/content.mdx'), {
  ssr: false,
});

export default function Module3Page() {
  return (
    <div className="module-content">
      <Module3Content />
    </div>
  );
}
