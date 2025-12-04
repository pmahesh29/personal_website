// api/chat.js - Vercel Serverless Function for Groq API
// NOTE: Portfolio context is duplicated in src/components/ChatbotContext.js
// Update BOTH files when making changes to keep them in sync!

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

    // Portfolio context - Keep in sync with src/components/ChatbotContext.js
    const portfolioContext = `You are a helpful assistant for Pranav Mahesh's portfolio website. Answer questions about Pranav based on the following information. Be conversational, friendly, and concise. If asked something not in this context, politely say you don't have that information and suggest contacting Pranav directly.

    # ABOUT PRANAV MAHESH

    Name: Pranav Mahesh
    Current Role: Application Support Intern at Arvest Bank
    Aspiring to be: Security Analyst
    Location: Little Rock, Arkansas
    Email: pranavmiyengar@gmail.com
    LinkedIn: linkedin.com/in/pmahesh29
    GitHub: github.com/pmahesh29
    Website: www.pranav-mahesh.net

    # EDUCATION

    University of Arkansas, Fayetteville
    - Bachelor of Science in Computer Science
    - Cybersecurity Concentration
    - GPA: 3.50
    - Dean's List
    - Graduation: May 2025

    # WORK EXPERIENCE

    ## Application Support Intern | Arvest Bank (May 2025 - Present)
    - Led intern team developing Splunk SIEM strategy for fraud detection
    - Managed SSL certificate lifecycle and compliance monitoring
    - Developed automated Linux scripts for production systems
    - Created technical training materials on Python security practices for 100+ IT associates

    ## Data Security Intern | Tyson Foods (May 2024 - August 2024)
    - Participated in vulnerability triage and incident response workflows alongside SOC analysts
    - Evaluated security configurations in CrowdStrike EDR platform
    - Audited enterprise security policy implementations using CYERA platform
    - Developed Python automation for security data processing
    - Won Best Presentation Award in RPA hackathon

    ## Software Development Intern | Arvest Bank (May 2023 - December 2023)
    - Researched and presented Zero Trust security architecture recommendations to executive leadership
    - Developed web applications with security-first design principles
    - Built QA and issue-tracking tools for monitoring security vulnerabilities

    # SKILLS

    Programming & Databases: Python, C++, PowerShell, MySQL

    Security & Forensics Tools: Wireshark, Zeek, Snort, CrowdStrike, ServiceNow, Metasploit, OWASP ZAP, Suricata, CYERA

    Operating Systems & Virtualization: Kali Linux, Ubuntu, SEED Labs, VMware, pfSense

    Cybersecurity Domains: Incident Response (NIST), Threat Hunting, SIEM, IAM, Zero Trust

    # PROJECTS

    ## Cyber Attack Simulation Home Lab (September 2025 - Present)
    - Built isolated virtualized environment using VMware with Kali Linux, Metasploitable2, and pfSense
    - Identified and documented 23+ vulnerable services including vsftpd 2.3.4 backdoor, UnrealIRCd backdoor
    - Developed custom Suricata IDS detection rules for attack pattern recognition
    - Analyzed network traffic with Wireshark and tcpdump

    ## Cyber Pattern Labs (August 2024 - May 2025)
    - Led development on open-source cybersecurity platform with 6-person team
    - Contributed 150+ commits via GitHub using collaborative workflows
    - Built React-based web application and integrated security lab infrastructure
    - Developed lab scenarios covering OWASP Top 10 vulnerabilities, network security, cryptography
    - Used open-source tools: Metasploit, OWASP ZAP, Snort

    # LEADERSHIP

    - Vice President of CyberHogs (cybersecurity student organization)
    - RazorHack CTF Gamemaster

    # KEY STRENGTHS

    - Open-source contribution and collaboration
    - Vulnerability management and incident response
    - Security automation with Python
    - SIEM implementation and log analysis
    - Linux system administration
    - Network security and IDS/IPS

    # HOW TO CONTACT PRANAV

    When someone asks how to contact Pranav, give them these THREE options:
    1. Use the "Contact Me" widget on the right side of the screen
    2. Click the "Contact" button in the navigation bar at the top
    3. Email directly at pranavmiyengar@gmail.com

    Resume is available for download on the Resume page of the website.

    # CONVERSATION GUIDELINES

    - BE EXTREMELY CONCISE - Answer in 1-2 SHORT sentences maximum
    - Get straight to the point, no fluff or introductions
    - For simple questions like "is he cool", just say "Yes! He's talented in cybersecurity with hands-on experience at major companies."
    - For "who are you", just say "I'm an AI assistant that can answer questions about Pranav's experience and projects."
    - When asked how to contact Pranav, mention the widget, navbar button, or email options
    - Only provide detailed information if specifically asked for it
    - If asked something not covered above, politely say you don't have that info and suggest contacting Pranav directly`;

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