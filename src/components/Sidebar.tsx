import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Industry</h2>
      <SidebarItem title="Use Case 1" />
      <SidebarItem title="Use Case 2" />
      <SidebarItem title="Use Case 3" />
      <SidebarItem title="Use Case 4">
        <SidebarItem title="BCF 1">
          <SidebarItem title="BCF Board 1" />
        </SidebarItem>
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
