import React from 'react';
import { NavLink } from 'react-router-dom';

import BlackLives from './BlackLives/BlackLives';
import Wrapper from '../Wrapper/Wrapper';
import NavLinks from './NavLinks/NavLinks';

import logo from '../../assets/images/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <>
      <BlackLives />
      <header className='header'>
        <div className='header__inner'>
          <Wrapper customClass='header__wrapper'>
            <div className='header__logo'>
              <NavLink to='/'>
                <img src={logo} alt='FrontEnd Masters' />
              </NavLink>
            </div>

            <div className='header__nav'>
              <NavLinks />
            </div>
          </Wrapper>
        </div>
        <svg
          className='header__diagonal'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 10'
          preserveAspectRatio='none'
        >
          <defs>
            <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stop-color='#c02d28'></stop>
              <stop offset='100%' stop-color='#e66225'></stop>
            </linearGradient>
          </defs>
          <polygon points='0,2 0,0 100,0 100,10' fill='url(#linear)'></polygon>
        </svg>
      </header>
    </>
  );
};

export default Header;
