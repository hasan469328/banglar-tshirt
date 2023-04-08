import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=''>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/orders'>Order</Link>
      <Link to='/others'>Others</Link>
    </nav>
  );
};

export default Header;