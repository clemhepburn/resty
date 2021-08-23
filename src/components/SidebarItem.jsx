import React from 'react';


const SidebarItem = ({ method, url, id }) => (
  <section className="sidebar-item" id={id}>
    <h4 id={id}>{method}</h4>
    <span id={id}>{url}</span>
  </section>
);

export default SidebarItem;