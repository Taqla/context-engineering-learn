import { NextResponse } from 'next/server';
import { generateQuizzes } from '@/lib/gemini-client';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { content, section } = await request.json();
    
    if (!content || !section) {
      return NextResponse.json(
        { error: 'Missing required fields: content, section' },
        { status: 400 }
      );
    }

    const quizzes = await generateQuizzes(content, section);
    
    return NextResponse.json({ quizzes });
  } catch (error) {
    console.error('Quiz generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate quizzes' },
      { status: 500 }
    );
  }
}
