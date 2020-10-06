import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './Button.scss';

type ButtonProps = {
  customClass?: string;
  children: ReactNode;
  urlPath: string;
};

const Button: FC<ButtonProps> = ({ children, customClass, urlPath }) => (
  <NavLink to={urlPath} className={`button ${customClass}`}>
    {children}
  </NavLink>
);

export default Button;
