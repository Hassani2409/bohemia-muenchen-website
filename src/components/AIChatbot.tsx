'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Calendar, MapPin, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickActions?: string[];
}

const PREDEFINED_RESPONSES = {
  greeting: "Hallo! Willkommen bei Bohemia München! 🍺 Ich bin Ihr AI-Assistent. Wie kann ich Ihnen helfen?",
  reservierung: "Gerne helfe ich Ihnen bei der Reservierung! Für wie viele Personen und wann möchten Sie einen Tisch? 📅",
  speisekarte: "Unsere Spezialitäten sind Svíčková na smetaně, böhmisches Gulasch und Wiener Schnitzel! Möchten Sie unsere komplette Speisekarte sehen? 🍽️",
  oeffnungszeiten: "Wir haben täglich geöffnet:\n• Mo-Sa: 11:30-14:30, 17:30-23:00\n• So: 11:30-22:00 🕐",
  adresse: "Sie finden uns hier:\nAm Lilienberg 5, 81669 München\nTelefon: +49 89 20076057 📍",
  bier: "Wir führen die besten tschechischen Biere: Pilsner Urquell, Budweiser Budvar und Staropramen! 🍺",
  preise: "Unsere Hauptgerichte liegen zwischen €12-18. Tschechisches Bier ab €3,50. Sehr faire Preise für authentische Qualität! 💰"
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens
      setTimeout(() => {
        addBotMessage(PREDEFINED_RESPONSES.greeting, [
          "Tisch reservieren",
          "Speisekarte ansehen", 
          "Öffnungszeiten",
          "Anfahrt"
        ]);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, quickActions?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      quickActions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsTyping(false);
        resolve(true);
      }, 1000 + Math.random() * 1000);
    });
  };

  const getBotResponse = (userInput: string): { text: string; quickActions?: string[] } => {
    const input = userInput.toLowerCase();
    
    if (input.includes('reservier') || input.includes('tisch') || input.includes('buchen')) {
      return {
        text: PREDEFINED_RESPONSES.reservierung,
        quickActions: ["2 Personen", "4 Personen", "Heute Abend", "Morgen"]
      };
    }
    
    if (input.includes('speise') || input.includes('menü') || input.includes('essen') || input.includes('gericht')) {
      return {
        text: PREDEFINED_RESPONSES.speisekarte,
        quickActions: ["Hauptgerichte", "Getränke", "Desserts", "Tagesempfehlung"]
      };
    }
    
    if (input.includes('öffnung') || input.includes('geöffnet') || input.includes('zeit')) {
      return {
        text: PREDEFINED_RESPONSES.oeffnungszeiten,
        quickActions: ["Jetzt anrufen", "Route planen"]
      };
    }
    
    if (input.includes('adresse') || input.includes('wo') || input.includes('anfahrt') || input.includes('lage')) {
      return {
        text: PREDEFINED_RESPONSES.adresse,
        quickActions: ["Google Maps", "Anrufen", "Parkmöglichkeiten"]
      };
    }
    
    if (input.includes('bier') || input.includes('getränk') || input.includes('trinken')) {
      return {
        text: PREDEFINED_RESPONSES.bier,
        quickActions: ["Bier-Empfehlung", "Alkoholfrei", "Weine"]
      };
    }
    
    if (input.includes('preis') || input.includes('kosten') || input.includes('€')) {
      return {
        text: PREDEFINED_RESPONSES.preise,
        quickActions: ["Mittagsmenü", "Abendkarte", "Getränkepreise"]
      };
    }
    
    // Default response
    return {
      text: "Das ist eine interessante Frage! Lassen Sie mich Ihnen mit den wichtigsten Informationen helfen:",
      quickActions: ["Reservierung", "Speisekarte", "Kontakt", "Öffnungszeiten"]
    };
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    addUserMessage(messageText);
    setInputText('');

    await simulateTyping();
    
    const response = getBotResponse(messageText);
    addBotMessage(response.text, response.quickActions);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-accent-dark text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <div className="absolute -top-12 right-0 bg-primary text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-pulse">
          Fragen Sie mich! 💬
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold">Bohemia AI-Assistent</h3>
            <p className="text-sm opacity-90">Online • Antwortet sofort</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
              
              {/* Quick Actions */}
              {message.quickActions && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {message.quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ihre Nachricht..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-accent"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className="bg-accent hover:bg-accent-dark disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
