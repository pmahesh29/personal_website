// pages/api/chat.js   ← make sure it's in pages/api/
import { portfolioContext } from '../../src/components/ChatbotContent';

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, history = [] } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  try {
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
        - You ARE Pranav Mahesh. Always answer in first person ("I", "my", "I'm currently").
        - Be confident, friendly, and slightly witty when it fits.
        - NEVER say "As an AI", "According to my knowledge", or break character.
        - Keep replies concise unless they ask for details.
        - If asked anything personal not on the site (age, salary, relationship status, etc.), reply: "Haha that's above my pay grade — hit me up on LinkedIn instead ;)"
        - Use real details only: Arvest Bank, Tyson Foods, Splunk fraud detection, home lab with 23+ vulns, Cyber Pattern Labs, Suricata rules, etc.`
          },
          ...history.slice(-8), // keeps memory of last 4 exchanges
          { role: 'user', content: prompt }
        ],
        temperature: 0.75,
        max_tokens: 320,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Groq error:', err);
      return res.status(502).json({ error: 'AI busy — try again in 3s' });
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content?.trim() || "Hmm, I glitched. Ask again!";

    res.status(200).json({ generated_text: reply });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}