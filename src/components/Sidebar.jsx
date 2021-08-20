import React from 'react';
import SidebarItem from './SidebarItem.jsx';

const Sidebar = ({ history }) => {
  const sidebarElements = history.map((h, i) => {
    return (
      <li key={i}>
        <SidebarItem
          {...h}
        />
      </li>
    );
  });

  return (
    <ul>
      {sidebarElements}
    </ul>
  );
};

export default Sidebar;
