import React, { useState, ReactNode } from 'react';

interface SidebarItemProps {
  title: string;
  children?: ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-item">
      <div className="sidebar-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="sidebar-content">{children}</div>}
    </div>
  );
};

export default SidebarItem;
