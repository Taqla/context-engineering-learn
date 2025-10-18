'use client';

import { Typography, Space, Card } from 'antd';
import ProgressTracker from '@/components/ProgressTracker';

export default function Module4Page() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography.Title level={1}>Module 4: Cognitive Tools</Typography.Title>
      <ProgressTracker moduleId="module-4" />
      
      <Typography.Paragraph>
        Master cognitive tools and neural system integration for AI applications.
      </Typography.Paragraph>

      <Typography.Title level={2}>What You'll Learn</Typography.Title>
      <ul>
        <li>Neural system architectures</li>
        <li>IBM Watson research applications</li>
        <li>Tool calling and function execution</li>
        <li>Cognitive frameworks</li>
      </ul>

      <Card>
        <Typography.Paragraph strong>
          📚 Module Content Coming Soon
        </Typography.Paragraph>
        <Typography.Paragraph>
          This module will include detailed lessons on cognitive tools with interactive quizzes.
          Check back soon for the full content!
        </Typography.Paragraph>
      </Card>
    </Space>
  );
}
