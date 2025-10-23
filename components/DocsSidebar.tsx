'use client';

import { Menu, Collapse, Progress, Button, Space, Typography } from 'antd';
import { BookOutlined, FolderOutlined, ReloadOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllProgress, resetAllProgress } from '@/lib/quiz-db';

const learningPathItems = [
  { key: 'intro', label: '🚀 Choose Learning Path', href: '/intro', duration: '2 min' },
  { key: 'module-1', label: 'Module 1: Prompt Fundamentals', href: '/module-1', duration: '30 min' },
  { key: 'module-2', label: 'Module 2: Context Expansion', href: '/module-2', duration: '45 min' },
  { key: 'module-3', label: 'Module 3: Multi-Agent Systems', href: '/module-3', duration: '60 min' },
  { key: 'module-4', label: 'Module 4: Cognitive Tools', href: '/module-4', duration: '60 min' },
  { key: 'module-5', label: 'Module 5: Field Theory', href: '/module-5', duration: '90 min' },
  { key: 'module-6', label: 'Module 6: Meta-Recursion', href: '/module-6', duration: '90 min' },
];

const repoStructureItems = [
  {
    key: 'foundations',
    label: '00_foundations/',
    icon: <FolderOutlined />,
    children: [
      { key: 'atoms', label: '01_atoms_prompting.md', href: '/repo/foundations/atoms' },
      { key: 'molecules', label: '02_molecules_few_shot.md', href: '/repo/foundations/molecules' },
      { key: 'cells', label: '03_cells_memory.md', href: '/repo/foundations/cells' },
      { key: 'organs', label: '04_organs_agents.md', href: '/repo/foundations/organs' },
    ],
  },
  {
    key: 'guides',
    label: '10_guides_zero_to_hero/',
    icon: <FolderOutlined />,
    children: [
      { key: 'min-prompt', label: '01_min_prompt.py', href: '/repo/guides/min-prompt' },
      { key: 'few-shot', label: '02_few_shot.py', href: '/repo/guides/few-shot' },
    ],
  },
  {
    key: 'templates',
    label: '20_templates/',
    icon: <FolderOutlined />,
    children: [
      { key: 'minimal-context', label: 'minimal_context.yaml', href: '/repo/templates/minimal-context' },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    loadProgress();
  }, [pathname]);

  async function loadProgress() {
    const allProgress = await getAllProgress();
    if (allProgress.length > 0) {
      const avgProgress = allProgress.reduce((sum, p) => sum + p.progress, 0) / allProgress.length;
      setOverallProgress(Math.round(avgProgress));
    }
  }

  async function handleReset() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      await resetAllProgress();
      setOverallProgress(0);
      window.location.reload();
    }
  }

  return (
    <div style={{ padding: 16, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Space direction="vertical" style={{ width: '100%', marginBottom: 24 }}>
        <Typography.Text strong style={{ fontSize: 16 }}>
          Overall Progress
        </Typography.Text>
        <Progress percent={overallProgress} strokeColor="#1677ff" />
        <Button
          size="small"
          icon={<ReloadOutlined />}
          onClick={handleReset}
          style={{ width: '100%' }}
        >
          Reset Progress
        </Button>
      </Space>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Typography.Text strong style={{ fontSize: 14, display: 'block', marginBottom: 12 }}>
          📚 Learning Path
        </Typography.Text>
        <Menu
          mode="inline"
          selectedKeys={[pathname.split('/')[1] || 'module-1']}
          items={learningPathItems.map(item => ({
            key: item.key,
            icon: <BookOutlined />,
            label: <Link href={item.href}>{item.label}</Link>,
          }))}
        />

        <Collapse
          ghost
          style={{ marginTop: 24 }}
          items={[
            {
              key: 'repo-structure',
              label: '📁 Repo Structure (reference)',
              children: (
                <Menu
                  mode="inline"
                  selectedKeys={[pathname.split('/').pop() || '']}
                  items={repoStructureItems.map(folder => ({
                    ...folder,
                    children: folder.children?.map(file => ({
                      ...file,
                      label: <Link href={file.href}>{file.label}</Link>,
                    })),
                  }))}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
