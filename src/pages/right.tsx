import React, { ReactNode } from 'react';

interface RightProps {
  children: ReactNode;
  bcfBoards: any[];
}

const Right: React.FC<RightProps> = ({ children, bcfBoards }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Right;
