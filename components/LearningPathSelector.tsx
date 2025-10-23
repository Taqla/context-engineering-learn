'use client';

import { Card, Row, Col, Button, Typography, Tag } from 'antd';
import { RocketOutlined, ExperimentOutlined, BookOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Paragraph } = Typography;

export default function LearningPathSelector() {
  const router = useRouter();

  const tracks = [
    {
      id: 'practical',
      title: '🚀 Practical Track',
      description: 'Start building immediately with hands-on examples',
      icon: <RocketOutlined style={{ fontSize: 48, color: '#52c41a' }} />,
      duration: '6–8 hours',
      path: '/module-1',
      badge: 'Recommended',
      features: [
        'Theory + Code mixed approach',
        'Immediate n8n workflow applications',
        'Modules 1–6 progression',
        'Interactive quizzes'
      ]
    },
    {
      id: 'mathematical',
      title: '🔬 Mathematical Track',
      description: 'Deep foundations with rigorous math + executable code',
      icon: <ExperimentOutlined style={{ fontSize: 48, color: '#1677ff' }} />,
      duration: '2 hours + main track',
      path: '/module-0/lesson-1',
      badge: 'Advanced',
      features: [
        'C = A(c₁, c₂, ..., c₆) formalization',
        'Optimization theory',
        'Interactive code playgrounds',
        'Then proceed to Modules 1–6'
      ]
    },
    {
      id: 'diagnostic',
      title: '📊 Take Diagnostic Quiz',
      description: 'Not sure? Let us recommend the best path',
      icon: <BookOutlined style={{ fontSize: 48, color: '#faad14' }} />,
      duration: '5 minutes',
      path: '/diagnostic',
      badge: null,
      features: [
        'Quick assessment of prior knowledge',
        'Personalized track recommendation',
        'Option to skip familiar content',
        'Adaptive learning path'
      ]
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 48 }}>
      <Title level={1} style={{ textAlign: 'center', marginBottom: 16 }}>
        Choose Your Learning Path
      </Title>
      <Paragraph style={{ textAlign: 'center', fontSize: 18, marginBottom: 48 }}>
        Multiple paths to mastery—pick the one that fits your learning style
      </Paragraph>

      <Row gutter={[24, 24]}>
        {tracks.map((track) => (
          <Col xs={24} md={8} key={track.id}>
            <Card
              hoverable
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              onClick={() => router.push(track.path)}
            >
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                {track.icon}
              </div>

              <Title level={3} style={{ textAlign: 'center', marginBottom: 8 }}>
                {track.title}
              </Title>

              {track.badge && (
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <Tag color={track.badge === 'Recommended' ? 'green' : 'blue'}>
                    {track.badge}
                  </Tag>
                </div>
              )}

              <Paragraph style={{ textAlign: 'center', color: '#595959', marginBottom: 24 }}>
                {track.description}
              </Paragraph>

              <Paragraph style={{ textAlign: 'center', marginBottom: 24 }}>
                <strong>Duration:</strong> {track.duration}
              </Paragraph>

              <ul style={{ marginBottom: 24, flex: 1 }}>
                {track.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <Button
                type="primary"
                size="large"
                block
                onClick={() => router.push(track.path)}
              >
                {track.id === 'diagnostic' ? 'Start Quiz' : 'Start Learning'}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
