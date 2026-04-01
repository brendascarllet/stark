
export type ScrollPrompt = {
  id: string;
  threshold: number;
  message: string;
  link?: string;
  actionText?: string;
  duration?: number;
};

export type ChatMessage = {
  type: 'user' | 'bot';
  content: string;
};

export type FAQResponses = Record<string, string>;
