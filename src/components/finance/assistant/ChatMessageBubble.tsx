
import React from 'react';
import { ChatMessage } from './types';

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  return (
    <div 
      className={`${message.type === 'user' ? 'ml-auto bg-gray-100' : 'mr-auto bg-blue-50'} p-3 rounded-lg max-w-[80%]`}
      dangerouslySetInnerHTML={{ __html: message.content }}
    />
  );
};

export default ChatMessageBubble;
