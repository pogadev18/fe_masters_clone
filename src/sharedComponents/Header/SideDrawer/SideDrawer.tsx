import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';

import logo from '../../../assets/images/logo.svg';

import './SideDrawer.scss';

type SideDrawerProps = {
  drawerIsVisible: boolean;
  onClick: () => void;
};

const SideDrawer: FC<SideDrawerProps> = ({
  children,
  drawerIsVisible,
  onClick
}) => {
  const content = (
    <aside className={`sideDrawer ${drawerIsVisible && 'sideDrawer--opened'}`}>
      <div className='sideDrawer__inner'>
        <CloseIcon onClick={onClick} className='sideDrawer__close' />
        <img className='sideDrawer__logo' src={logo} alt='FrontEnd Masters' />
        <hr />
        {children}
      </div>
    </aside>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('drawer-hook')!
  );
};

export default SideDrawer;
