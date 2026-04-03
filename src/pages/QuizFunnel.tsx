import { useEffect } from 'react';
import quizHtml from '../assets/quiz-funnel.html?raw';

const QuizFunnel = () => {
  useEffect(() => {
    document.title = 'Stark Roofing & Renovation — Find Out Your Roof Cost in Seconds';
  }, []);

  return (
    <iframe
      srcDoc={quizHtml}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="Stark Roofing Quiz Funnel"
      allow="autoplay"
    />
  );
};

export default QuizFunnel;
