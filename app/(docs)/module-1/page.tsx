import { Typography, Space, Card } from 'antd';
import ProgressTracker from '@/components/ProgressTracker';

export default function Module1Page() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography.Title level={1}>Module 1: Prompt Fundamentals</Typography.Title>
      <ProgressTracker moduleId="module-1" />
      
      <Typography.Paragraph>
        Welcome to the first module on Context Engineering! This module covers the foundational concepts
        of prompt engineering and context manipulation.
      </Typography.Paragraph>

      <Typography.Title level={2}>What You'll Learn</Typography.Title>
      <ul>
        <li>Atomic prompting principles</li>
        <li>Constraint-based prompt design</li>
        <li>Few-shot learning techniques</li>
        <li>Context window optimization</li>
      </ul>

      <Card>
        <Typography.Paragraph strong>
          📚 Module Content Coming Soon
        </Typography.Paragraph>
        <Typography.Paragraph>
          This module will include detailed lessons on prompt fundamentals with interactive quizzes
          to test your understanding. Check back soon for the full content!
        </Typography.Paragraph>
      </Card>
    </Space>
  );
}
