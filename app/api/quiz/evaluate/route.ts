import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { answer, correct } = await request.json();
    
    if (!answer || !correct) {
      return NextResponse.json(
        { error: 'Missing required fields: answer, correct' },
        { status: 400 }
      );
    }

    const isCorrect = answer === correct;
    
    return NextResponse.json({ 
      correct: isCorrect,
      message: isCorrect ? 'Correct answer!' : 'Incorrect answer. Try again!'
    });
  } catch (error) {
    console.error('Quiz evaluation error:', error);
    return NextResponse.json(
      { error: 'Failed to evaluate answer' },
      { status: 500 }
    );
  }
}
