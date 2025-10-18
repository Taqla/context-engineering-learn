import Dexie, { Table } from 'dexie';

export interface QuizState {
  id: string;
  moduleId: string;
  section: string;
  difficulty: 'simple' | 'medium' | 'hard';
  selectedAnswer: string;
  correct: boolean;
  timestamp: Date;
}

export interface ModuleProgress {
  id: string;
  moduleId: string;
  progress: number;
  completedSections: string[];
  lastAccessed: Date;
}

class QuizDatabase extends Dexie {
  quizStates!: Table<QuizState, string>;
  moduleProgress!: Table<ModuleProgress, string>;

  constructor() {
    super('ContextEngineeringDB');
    this.version(1).stores({
      quizStates: 'id, moduleId, section, timestamp',
      moduleProgress: 'id, moduleId, lastAccessed',
    });
  }
}

export const db = new QuizDatabase();

export async function saveQuizAnswer(
  moduleId: string,
  section: string,
  difficulty: 'simple' | 'medium' | 'hard',
  selectedAnswer: string,
  correct: boolean
) {
  const id = `${moduleId}-${section}-${difficulty}`;
  await db.quizStates.put({
    id,
    moduleId,
    section,
    difficulty,
    selectedAnswer,
    correct,
    timestamp: new Date(),
  });
}

export async function getQuizAnswer(moduleId: string, section: string, difficulty: string) {
  const id = `${moduleId}-${section}-${difficulty}`;
  return await db.quizStates.get(id);
}

export async function updateModuleProgress(moduleId: string, progress: number, completedSections: string[]) {
  await db.moduleProgress.put({
    id: moduleId,
    moduleId,
    progress,
    completedSections,
    lastAccessed: new Date(),
  });
}

export async function getModuleProgress(moduleId: string) {
  return await db.moduleProgress.get(moduleId);
}

export async function getAllProgress() {
  return await db.moduleProgress.toArray();
}

export async function resetAllProgress() {
  await db.quizStates.clear();
  await db.moduleProgress.clear();
}
