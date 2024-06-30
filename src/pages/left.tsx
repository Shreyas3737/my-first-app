import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* You can include header, footer, sidebar, etc. here */}
      {children}
    </div>
  );
};

export default Layout;
