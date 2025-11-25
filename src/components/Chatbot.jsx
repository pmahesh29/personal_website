import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import portfolioContext from './ChatbotContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm here to answer questions about Pranav's experience, skills, and projects. What would you like to know?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Call backend API (Vercel serverless function)
  const queryHuggingFace = async (userMessage) => {
    // Build conversation history for context
    const conversationHistory = messages
      .slice(-3) // Last 3 messages for context
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const prompt = `${portfolioContext}

Previous conversation:
${conversationHistory}

User: ${userMessage}
Assistant:`;

    try {
      // Call our Vercel backend (change this URL to your Vercel deployment)
      const response = await fetch('https://pmahesh29-github-io.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      // Extract the generated text
      let botResponse = '';
      if (Array.isArray(data) && data[0]?.generated_text) {
        botResponse = data[0].generated_text.trim();
      } else if (data.generated_text) {
        botResponse = data.generated_text.trim();
      } else {
        botResponse = "I'm having trouble processing that. Could you rephrase your question?";
      }

      // Clean up response (remove any leftover prompt text)
      botResponse = botResponse.replace(/^(Assistant:|User:)/gi, '').trim();

      return botResponse;
    } catch (error) {
      console.error('Chatbot error:', error);
      return "I'm having technical difficulties. Please try again or contact Pranav directly at pranavmiyengar@gmail.com";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Get bot response
    const botResponse = await queryHuggingFace(userMessage);

    // Add bot response
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className={`chat-bubble ${isOpen ? 'hidden' : ''}`} onClick={toggleChat}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">🤖</div>
              <div className="chat-title">
                <h3>Ask About Pranav</h3>
                <span className="chat-status">AI Assistant</span>
              </div>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask about Pranav's experience..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              className="chat-send" 
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="chat-footer">
            <span>Powered by Hugging Face 🤗</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;