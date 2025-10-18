'use client';

import { Typography, Space, Card } from 'antd';
import ProgressTracker from '@/components/ProgressTracker';

export default function Module2Page() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography.Title level={1}>Module 2: Context Expansion</Typography.Title>
      <ProgressTracker moduleId="module-2" />
      
      <Typography.Paragraph>
        Learn advanced techniques for expanding and managing context in AI interactions.
      </Typography.Paragraph>

      <Typography.Title level={2}>What You'll Learn</Typography.Title>
      <ul>
        <li>Few-shot learning patterns</li>
        <li>Memory management strategies</li>
        <li>Template-based prompting</li>
        <li>Context compression techniques</li>
      </ul>

      <Card>
        <Typography.Paragraph strong>
          📚 Module Content Coming Soon
        </Typography.Paragraph>
        <Typography.Paragraph>
          This module will include detailed lessons on context expansion with interactive quizzes.
          Check back soon for the full content!
        </Typography.Paragraph>
      </Card>
    </Space>
  );
}
