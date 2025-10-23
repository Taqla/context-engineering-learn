'use client';

import { Typography, Button, Space } from 'antd';
import { useRouter } from 'next/navigation';
import { RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '80px 24px',
      textAlign: 'center' 
    }}>
      <div style={{ marginBottom: 48 }}>
        <RocketOutlined style={{ fontSize: 72, color: '#1677ff', marginBottom: 24 }} />
      </div>

      <Title level={1} style={{ marginBottom: 16 }}>
        Context Engineering Learning Platform
      </Title>

      <Paragraph style={{ fontSize: 18, color: '#595959', marginBottom: 48 }}>
        Master context engineering from atoms to unified fields through interactive modules, 
        quizzes, and real-world applications.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <Button
          type="primary"
          size="large"
          block
          style={{ height: 56, fontSize: 18 }}
          onClick={() => router.push('/intro')}
        >
          Choose Your Learning Path
        </Button>

        <Button
          size="large"
          block
          style={{ height: 48 }}
          onClick={() => router.push('/module-1')}
        >
          Jump Directly to Module 1
        </Button>
      </Space>

      <div style={{ 
        marginTop: 64, 
        padding: 24, 
        background: '#f6f8fa', 
        borderRadius: 8,
        textAlign: 'left'
      }}>
        <Title level={4}>📚 What You'll Learn</Title>
        <ul style={{ marginBottom: 0 }}>
          <li>Basic prompting to advanced unified field theory</li>
          <li>Multi-agent systems and cognitive frameworks</li>
          <li>Interactive quizzes and progress tracking</li>
          <li>Real-world Python implementations</li>
        </ul>
      </div>

      <Paragraph style={{ marginTop: 48, color: '#8c8c8c' }}>
        Based on{' '}
        <a href="https://github.com/davidkimai/Context-Engineering" target="_blank" rel="noopener noreferrer">
          davidkimai/Context-Engineering
        </a>
        {' '}(MIT License)
      </Paragraph>
    </div>
  );
}
