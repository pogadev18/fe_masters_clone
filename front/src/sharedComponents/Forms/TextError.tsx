import React, { FC } from 'react';

const TextError: FC = ({ children }) => {
  return <div className='error'>{children}</div>;
};

export default TextError;
