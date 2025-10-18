'use client';

import { useState, useEffect } from 'react';
import { Card, Radio, Button, Alert, Tabs, Collapse, Space, Typography } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, BulbOutlined } from '@ant-design/icons';
import { saveQuizAnswer, getQuizAnswer } from '@/lib/quiz-db';

interface QuizEmbedProps {
  moduleId: string;
  section: string;
  quizzes: Array<{
    difficulty: 'simple' | 'medium' | 'hard';
    question: string;
    options: { A: string; B: string; C: string; D: string };
    correct: 'A' | 'B' | 'C' | 'D';
    hint: string;
    explanation: string;
  }>;
}

export default function QuizEmbed({ moduleId, section, quizzes }: QuizEmbedProps) {
  const [activeDifficulty, setActiveDifficulty] = useState<'simple' | 'medium' | 'hard'>('simple');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, { correct: boolean; explanation: string }>>({});

  useEffect(() => {
    loadSavedAnswers();
  }, [moduleId, section]);

  async function loadSavedAnswers() {
    const savedAnswers: Record<string, string> = {};
    const savedFeedback: Record<string, any> = {};
    
    for (const quiz of quizzes) {
      const saved = await getQuizAnswer(moduleId, section, quiz.difficulty);
      if (saved) {
        savedAnswers[quiz.difficulty] = saved.selectedAnswer;
        savedFeedback[quiz.difficulty] = {
          correct: saved.correct,
          explanation: quiz.explanation,
        };
      }
    }
    
    setAnswers(savedAnswers);
    setFeedback(savedFeedback);
  }

  const currentQuiz = quizzes.find(q => q.difficulty === activeDifficulty);

  if (!currentQuiz) return null;

  async function handleSubmit() {
    const selectedAnswer = answers[activeDifficulty];
    if (!selectedAnswer) return;

    const correct = selectedAnswer === currentQuiz.correct;
    await saveQuizAnswer(moduleId, section, activeDifficulty, selectedAnswer, correct);

    setFeedback({
      ...feedback,
      [activeDifficulty]: {
        correct,
        explanation: currentQuiz.explanation,
      },
    });
  }

  const difficultyColors = {
    simple: '#52c41a',
    medium: '#faad14',
    hard: '#f5222d',
  };

  return (
    <Card className="quiz-card" style={{ marginTop: 32, marginBottom: 32 }}>
      <Tabs
        activeKey={activeDifficulty}
        onChange={(key) => setActiveDifficulty(key as any)}
        items={[
          { key: 'simple', label: <span style={{ color: difficultyColors.simple }}>● Simple</span> },
          { key: 'medium', label: <span style={{ color: difficultyColors.medium }}>● Medium</span> },
          { key: 'hard', label: <span style={{ color: difficultyColors.hard }}>● Hard</span> },
        ]}
      />

      <Space direction="vertical" style={{ width: '100%', marginTop: 16 }} size="large">
        <Typography.Text strong style={{ fontSize: 16 }}>
          {currentQuiz.question}
        </Typography.Text>

        <Radio.Group
          value={answers[activeDifficulty]}
          onChange={(e) => setAnswers({ ...answers, [activeDifficulty]: e.target.value })}
          style={{ width: '100%' }}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            {Object.entries(currentQuiz.options).map(([key, value]) => (
              <Radio key={key} value={key} style={{ padding: '8px 0' }}>
                <strong>{key}.</strong> {value}
              </Radio>
            ))}
          </Space>
        </Radio.Group>

        <Collapse
          ghost
          items={[
            {
              key: 'hint',
              label: (
                <span>
                  <BulbOutlined style={{ marginRight: 8 }} />
                  Show Hint
                </span>
              ),
              children: <Typography.Text type="secondary">{currentQuiz.hint}</Typography.Text>,
            },
          ]}
        />

        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={!answers[activeDifficulty]}
          style={{ width: '100%' }}
        >
          Check Answer
        </Button>

        {feedback[activeDifficulty] && (
          <Alert
            type={feedback[activeDifficulty].correct ? 'success' : 'error'}
            icon={feedback[activeDifficulty].correct ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
            message={feedback[activeDifficulty].correct ? 'Correct!' : 'Incorrect'}
            description={feedback[activeDifficulty].explanation}
            showIcon
          />
        )}
      </Space>
    </Card>
  );
}
