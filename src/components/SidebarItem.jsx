import React from 'react';


const SidebarItem = ({ method, id, url }) => (
  <section class="sidebar-item" id={id}>
    <h4 id={id}>{method}</h4>
    <span id={id}>{url}</span>
  </section> 
);

export default SidebarItem;