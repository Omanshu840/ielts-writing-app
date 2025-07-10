export type Mistake = {
  id: string
  type: 'grammar' | 'vocabulary' | 'coherence' | 'task-achievement'
  description: string
  severity: 'low' | 'medium' | 'high'
  highlightedText?: string
  originalLine?: string  // New field
  fixedLine?: string     // New field
}

export type Correction = {
  id: string;
  original: string;
  corrected: string;
  explanation: string;
  mistakes: Mistake[];
  date: string;
  bandScore: number;
};

export type WritingAttempt = {
  id: string
  taskType: 'task1' | 'task2'
  question: string
  original: string
  improved: string
  feedback: string
  mistakes: Mistake[]
  date: string
  bandScore: number
  wordCount: number
  timeSpent: number // in minutes
}