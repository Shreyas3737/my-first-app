
import React from 'react';

interface PromptCardProps {
  prompt: {
    id: string;
    title: string;
    description: string;
  };
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <div className="prompt-card">
      <h2>{prompt.title}</h2>
      <p>{prompt.description}</p>
    </div>
  );
};

export default PromptCard;
