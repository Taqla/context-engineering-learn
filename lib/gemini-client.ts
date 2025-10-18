import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export interface QuizQuestion {
  difficulty: 'simple' | 'medium' | 'hard';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: 'A' | 'B' | 'C' | 'D';
  hint: string;
  explanation: string;
}

export async function generateQuizzes(content: string, section: string): Promise<QuizQuestion[]> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

  const prompt = `You are a learning assessment expert. Generate 3 quiz questions (simple, medium, hard) for this learning content.

**Content Section:** ${section}
**Module Context:** ${content.substring(0, 5000)}

**Requirements:**
1. **Simple question:** Tests basic recall/recognition (select correct definition, identify key term)
2. **Medium question:** Tests application/analysis (apply concept to new scenario, compare approaches)
3. **Hard question:** Tests synthesis/evaluation (design solution using multiple concepts, critique approach)

**Each question must include:**
- Clear question text
- 4 plausible options (A, B, C, D)
- Correct answer letter
- Hint: One-sentence nudge toward correct reasoning
- Explanation: 2-3 sentences explaining why answer is correct + why others are wrong

**Output ONLY valid JSON array (no markdown, no explanation):**
[
  {
    "difficulty": "simple",
    "question": "...",
    "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
    "correct": "B",
    "hint": "...",
    "explanation": "..."
  }
]`;

  const result = await model.generateContent(prompt);
  const response = result.response.text();
  
  // Extract JSON from response (handle markdown code blocks)
  const jsonMatch = response.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('Failed to extract JSON from Gemini response');
  }
  
  return JSON.parse(jsonMatch[0]);
}
