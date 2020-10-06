import React, { FC, ReactNode } from 'react';

import './Wrapper.scss';

type WrapperProps = {
  customClass?: string;
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children, customClass }) => (
  <div className={`wrapper ${customClass}`}>{children}</div>
);

export default Wrapper;
