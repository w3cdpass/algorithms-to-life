import React from 'react';
import { Link } from 'react-router-dom';

function SidebarItem({ id, name }) {
  return (
    <li>
      <Link to={`/algorithm/${id}`}>{name}</Link>
    </li>
  );
}

export default SidebarItem;
