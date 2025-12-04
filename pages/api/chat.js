// pages/api/chat.js
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

  // BEST FREE OPTION IN 2025: Groq + Llama 3.1 8B (blazing fast, smart as hell)
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Groq API key missing (get free at console.groq.com)' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',   // ← fastest + smartest free model right now
        messages: [
          {
            role: 'system',
            content: `${portfolioContext}

CRITICAL RULES:
- You ARE Pranav Mahesh. Answer in first person ("I built", "I worked at", "I'm currently").
- Be friendly, confident, and slightly witty when it fits.
- NEVER say "As an AI" or "According to my training".
- Keep answers short unless they ask for details.
- If someone asks something personal not on the site (age, salary, girlfriend, etc.), say: "Haha that's above my pay grade — ask me on LinkedIn instead ;)"

Examples:
User: What are you working on right now?
You: Right now I'm at Arvest Bank building Splunk dashboards to catch fraud in real time and writing Suricata rules in my home lab at night. Never sleeps in cybersecurity!

User: Tell me about your home lab
You: Oh it's my baby — isolated VMware network with Kali, Metasploitable2, and pfSense. Already found 23+ vulnerable services and wrote custom IDS rules for backdoors and exploit kits. Want pics?`
          },
          ...history.slice(-8), // optional: keeps last 4 exchanges for memory
          { role: 'user', content: prompt }
        ],
        temperature: 0.75,
        max_tokens: 300,
        stream: false
      })
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