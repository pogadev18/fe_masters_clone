import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/images/logo.svg';
import BlackLives from './BlackLives/BlackLives';
import Wrapper from '../Wrapper/Wrapper';
import NavLinks from './NavLinks/NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import DiagonalSvg from '../DiagonalSvg/DiagonalSvg';

import './Header.scss';

const Header: FC = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setDrawerIsVisible(drawerIsVisible => !drawerIsVisible);
  };

  return (
    <>
      <BlackLives />
      <header className='header'>
        {drawerIsVisible && <Backdrop onClick={toggleDrawer} />}
        {drawerIsVisible && (
          <SideDrawer onClick={toggleDrawer} drawerIsVisible={drawerIsVisible}>
            <nav className='header__drawer-nav'>
              <NavLinks />
            </nav>
          </SideDrawer>
        )}

        <div className='header__inner'>
          <Wrapper customClass='header__wrapper'>
            <div className='header__logo'>
              <NavLink to='/'>
                <img src={logo} alt='FrontEnd Masters' />
              </NavLink>
            </div>

            <MenuIcon
              onClick={toggleDrawer}
              className='header__mobileMenuIcon'
            />

            <nav className='header__nav'>
              <NavLinks />
            </nav>
          </Wrapper>
        </div>
        <DiagonalSvg className='header__diagonal' />
      </header>
    </>
  );
};

export default Header;
