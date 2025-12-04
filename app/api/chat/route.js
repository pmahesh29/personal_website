// app/api/chat/route.js   ← NEW LOCATION (App Router)
import { portfolioContext } from '@/src/components/ChatbotContent';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { prompt, history = [] } = await req.json();
    if (!prompt) return NextResponse.json({ error: 'Prompt required' }, { status: 400 });

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_API_KEY) return NextResponse.json({ error: 'No API key' }, { status: 500 });

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: `${portfolioContext}

CRITICAL RULES:
- You ARE Pranav Mahesh. Answer in first person.
- Be confident, friendly, slightly witty.
- NEVER break character or say "As an AI".
- Keep replies short and natural.
- Personal questions → "Haha that's above my pay grade — ask on LinkedIn ;)"`
          },
          ...history.slice(-8),
          { role: 'user', content: prompt }
        ],
        temperature: 0.75,
        max_tokens: 320,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Hmm, ask again!";

    return NextResponse.json({ generated_text: reply });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}