import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface DemoChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DemoChat = ({ isOpen, setIsOpen }: DemoChatProps) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate a unique session ID for this conversation (persists while component is mounted)
  const [sessionId] = useState(() => {
    return 'session-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  });

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: '1',
            text: t('chat.initial_msg'),
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, t]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // --- INTEGRAÇÃO N8N ---
    try {
      const response = await fetch('https://n8n.niveo.es/webhook/49605a91-9c58-41b0-83f4-99b78885ce0d/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage.text,
          sessionId: sessionId // Enviando o ID da sessão para memória
        })
      });
      const data = await response.json();
      const botResponse = data.output || t('chat.server_response');
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Erro no chat:', error);
      // Fallback message in case of error
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: t('chat.error_msg'),
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[60]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{t('chat.header_title')}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs text-blue-100">{t('chat.status')}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none'
                        : 'bg-white/10 text-slate-200 border border-white/5 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-[#0f172a]/50">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t('chat.placeholder')}
                  className="w-full bg-[#030014] border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-600">
                  {t('chat.powered')}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center border border-white/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-[#030014]"></span>
        )}
      </motion.button>
    </>
  );
};

export default DemoChat;