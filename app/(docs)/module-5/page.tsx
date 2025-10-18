import { Typography, Space, Card } from 'antd';
import ProgressTracker from '@/components/ProgressTracker';

export default function Module5Page() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography.Title level={1}>Module 5: Field Theory</Typography.Title>
      <ProgressTracker moduleId="module-5" />
      
      <Typography.Paragraph>
        Dive deep into neural field theory and symbolic emergence in AI systems.
      </Typography.Paragraph>

      <Typography.Title level={2}>What You'll Learn</Typography.Title>
      <ul>
        <li>Neural field fundamentals</li>
        <li>Symbolic emergence patterns</li>
        <li>MEM1 research insights</li>
        <li>Field-based architectures</li>
      </ul>

      <Card>
        <Typography.Paragraph strong>
          📚 Module Content Coming Soon
        </Typography.Paragraph>
        <Typography.Paragraph>
          This module will include detailed lessons on field theory with interactive quizzes.
          Check back soon for the full content!
        </Typography.Paragraph>
      </Card>
    </Space>
  );
}
