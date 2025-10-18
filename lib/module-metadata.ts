export interface ModuleMetadata {
  id: string;
  title: string;
  duration: string;
  sections: string[];
  quizCount: number;
}

export const modules: ModuleMetadata[] = [
  {
    id: 'module-1',
    title: 'Prompt Fundamentals',
    duration: '30 min',
    sections: ['intro', 'atoms', 'constraints', 'examples'],
    quizCount: 5,
  },
  {
    id: 'module-2',
    title: 'Context Expansion',
    duration: '45 min',
    sections: ['few-shot', 'memory', 'templates'],
    quizCount: 6,
  },
  {
    id: 'module-3',
    title: 'Multi-Agent Systems',
    duration: '60 min',
    sections: ['agents', 'orchestration', 'chatbot-example'],
    quizCount: 6,
  },
  {
    id: 'module-4',
    title: 'Cognitive Tools',
    duration: '60 min',
    sections: ['neural-systems', 'ibm-research', 'tool-calls'],
    quizCount: 7,
  },
  {
    id: 'module-5',
    title: 'Field Theory',
    duration: '90 min',
    sections: ['neural-fields', 'symbolic-emergence', 'mem1-research'],
    quizCount: 7,
  },
  {
    id: 'module-6',
    title: 'Meta-Recursion',
    duration: '90 min',
    sections: ['self-improvement', 'quantum-semantics', 'protocols'],
    quizCount: 7,
  },
];

export function getModuleById(id: string): ModuleMetadata | undefined {
  return modules.find(m => m.id === id);
}

export function calculateProgress(completedSections: string[], totalSections: number): number {
  return Math.round((completedSections.length / totalSections) * 100);
}
