import React from 'react';

interface PromptCardProps {
  date: string;
  name: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ date, name }) => {
  return (
    <div className="prompt-card">
      <div>{date}</div>
      <h3>{name}</h3>
      <div className="chart-placeholder">[Chart]</div>
    </div>
  );
};

export default PromptCard;
