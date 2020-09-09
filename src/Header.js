import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img
        src='./amazon_header_logo_1024x373.png'
        className='header__logo'
        alt='header label'
      />
      <div className='header__search'>
        <input type='text' className='header__search_input' />
        {/* Search Icon */}
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__option_line1'>Hello Guest</span>
          <span className='header__option_line2'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__option_line1'>Return</span>
          <span className='header__option_line2'>&amp; Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__option_line1'>Your</span>
          <span className='header__option_line2'>Prime</span>
        </div>
        <div className='header__option'>{/* Basket Icon */}</div>
      </div>
    </div>
  );
}

export default Header;
