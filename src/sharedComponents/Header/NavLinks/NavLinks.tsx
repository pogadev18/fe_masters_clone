import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../Button/Button';

import './NavLinks.scss';

const NavLinks: FC = () => (
  <ul className='navigation'>
    <li>
      <NavLink to='/courses'>Courses</NavLink>
    </li>
    <li>
      <NavLink to='/courses'>Learn</NavLink>
    </li>
    <li>
      <NavLink to='/courses'>Pricing</NavLink>
    </li>
    <li>
      <NavLink to='/courses'>Login</NavLink>
    </li>
    <li>
      <Button urlPath='/courses' customClass='navigation__join'>
        Join Now
      </Button>
    </li>
  </ul>
);

export default NavLinks;
