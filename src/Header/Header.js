import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1 className='header-text'>
        <span style={{ color: 'green' }}>JAN</span>
        <span style={{ color: 'blue' }}>KEN</span>
        <span style={{ color: 'brown' }}>PON</span>
        <span>!</span>
      </h1>
    </header>
  );
};

export default Header;
