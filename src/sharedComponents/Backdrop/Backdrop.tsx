import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import './Backdrop.scss';

type BackdropProps = {
  onClick: () => void;
};

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={onClick}></div>,
    document.getElementById('backdrop-hook')!
  );
};

export default Backdrop;
