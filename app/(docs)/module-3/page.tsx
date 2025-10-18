import { Typography, Space, Card } from 'antd';
import ProgressTracker from '@/components/ProgressTracker';

export default function Module3Page() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography.Title level={1}>Module 3: Multi-Agent Systems</Typography.Title>
      <ProgressTracker moduleId="module-3" />
      
      <Typography.Paragraph>
        Explore the architecture and orchestration of multi-agent AI systems.
      </Typography.Paragraph>

      <Typography.Title level={2}>What You'll Learn</Typography.Title>
      <ul>
        <li>Agent architecture patterns</li>
        <li>Orchestration strategies</li>
        <li>Inter-agent communication</li>
        <li>Building chatbot systems</li>
      </ul>

      <Card>
        <Typography.Paragraph strong>
          📚 Module Content Coming Soon
        </Typography.Paragraph>
        <Typography.Paragraph>
          This module will include detailed lessons on multi-agent systems with interactive quizzes.
          Check back soon for the full content!
        </Typography.Paragraph>
      </Card>
    </Space>
  );
}
