'use client';

import { useEffect, useState } from 'react';
import { Progress, Space, Typography } from 'antd';
import { getModuleProgress } from '@/lib/quiz-db';

interface ProgressTrackerProps {
  moduleId: string;
}

export default function ProgressTracker({ moduleId }: ProgressTrackerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    loadProgress();
  }, [moduleId]);

  async function loadProgress() {
    const moduleProgress = await getModuleProgress(moduleId);
    if (moduleProgress) {
      setProgress(moduleProgress.progress);
    }
  }

  return (
    <Space direction="vertical" style={{ width: '100%', marginTop: 24, marginBottom: 24 }}>
      <Typography.Text type="secondary">Module Progress</Typography.Text>
      <Progress percent={progress} strokeColor="#1677ff" />
    </Space>
  );
}
