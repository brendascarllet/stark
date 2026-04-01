
import React, { useState } from 'react';
import { LifeBuoy } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ChatMessageBubble from './ChatMessageBubble';
import QuickQuestionButtons from './QuickQuestionButtons';
import { ChatMessage } from './types';

interface ChatDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  chatMessages: ChatMessage[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  faqResponses: Record<string, string>;
  handleSendMessage: () => void;
  userQuestion: string;
  setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const ChatDialog = ({ 
  isOpen, 
  onOpenChange,
  chatMessages,
  setChatMessages,
  faqResponses,
  handleSendMessage,
  userQuestion,
  setUserQuestion
}: ChatDialogProps) => {
  const handleQuickQuestionClick = (question: string, answer: string) => {
    setChatMessages(prev => [...prev, {
      type: 'user',
      content: question
    }]);
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        type: 'bot',
        content: answer
      }]);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 p-0 overflow-hidden">
        <div className="bg-navy text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LifeBuoy size={20} />
            <DialogTitle className="m-0">StarkBot Assistant</DialogTitle>
          </div>
        </div>
        
        <div className="bg-white p-4 max-h-[350px] overflow-y-auto flex flex-col gap-3">
          {chatMessages.map((message, index) => (
            <ChatMessageBubble key={index} message={message} />
          ))}
        </div>
        
        <div className="border-t p-3 flex gap-2">
          <input 
            type="text" 
            value={userQuestion} 
            onChange={e => setUserQuestion(e.target.value)} 
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()} 
            placeholder="Type your question..." 
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-navy" 
          />
          <Button 
            onClick={handleSendMessage} 
            variant="default" 
            className="bg-stark-red hover:bg-stark-redHover"
          >
            Send
          </Button>
        </div>
        
        <div className="bg-gray-50 p-3 border-t">
          <QuickQuestionButtons 
            onQuickQuestionClick={handleQuickQuestionClick} 
            faqResponses={faqResponses}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
