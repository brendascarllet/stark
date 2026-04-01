
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingButton from './assistant/FloatingButton';
import PromptBubble from './assistant/PromptBubble';
import ChatDialog from './assistant/ChatDialog';
import { useVirtualAssistant } from './assistant/useVirtualAssistant';
import { faqResponses, scrollPrompts } from './assistant/faqData';

const VirtualAssistant = () => {
  const {
    isOpen,
    setIsOpen,
    chatOpen,
    setChatOpen,
    promptVisible,
    handlePromptAction,
    setPromptVisible,
    userQuestion,
    setUserQuestion,
    chatMessages,
    setChatMessages,
    handleSendMessage
  } = useVirtualAssistant(scrollPrompts, faqResponses);
  
  const handleFloatingButtonClick = () => {
    setIsOpen(!isOpen);
    setChatOpen(!chatOpen);
  };
  
  return (
    <>
      {/* Floating Button - Always visible */}
      <FloatingButton onClick={handleFloatingButtonClick} />

      {/* Scroll Prompt */}
      <AnimatePresence>
        {promptVisible && (
          <PromptBubble 
            prompt={promptVisible}
            onAction={handlePromptAction}
            onClose={() => setPromptVisible(null)}
          />
        )}
      </AnimatePresence>

      {/* Chat Dialog */}
      <ChatDialog 
        isOpen={chatOpen}
        onOpenChange={setChatOpen}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        faqResponses={faqResponses}
        handleSendMessage={handleSendMessage}
        userQuestion={userQuestion}
        setUserQuestion={setUserQuestion}
      />
    </>
  );
};

export default VirtualAssistant;
