import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>Postball</li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
