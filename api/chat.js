// api/chat.js - Vercel Serverless Function for Groq API

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, history = [] } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Get API key from environment variable
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY environment variable not set');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Portfolio context
    const portfolioContext = `You are a helpful assistant for Pranav Mahesh's portfolio website. Answer questions concisely based on this information:

ABOUT PRANAV MAHESH:
- Application Support Intern at Arvest Bank (May 2025 - Present)
- Data Security Intern at Tyson Foods (May 2024 - August 2024)
- Software Development Intern at Arvest Bank (May 2023 - December 2023)
- University of Arkansas CS graduate (May 2025), GPA 3.50, Cybersecurity Concentration

KEY SKILLS:
- Programming: Python, C++, PowerShell, MySQL
- Security Tools: CrowdStrike, Splunk, Wireshark, Metasploit, OWASP ZAP, Suricata
- Operating Systems: Kali Linux, Ubuntu, VMware, pfSense

PROJECTS:
- Cyber Attack Simulation Home Lab: Built with VMware, identified 23+ vulnerabilities
- Cyber Pattern Labs: Open-source platform, 150+ commits, 6-person team

LEADERSHIP:
- Vice President of CyberHogs
- RazorHack CTF Gamemaster

CRITICAL RULES:
- Keep responses SHORT (1-3 sentences max)
- Be helpful and professional
- If asked something not covered, suggest contacting Pranav at pranavmiyengar@gmail.com`;

    // Build messages array
    const messages = [
      {
        role: 'system',
        content: portfolioContext
      },
      ...history.slice(-8), // Last 8 messages for context
      {
        role: 'user',
        content: prompt
      }
    ];

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'Groq API error',
        details: errorText 
      });
    }

    const data = await response.json();
    
    // Extract response
    const botResponse = data.choices?.[0]?.message?.content?.trim() || 'Hmm, try again!';
    
    return res.status(200).json({
      generated_text: botResponse
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}