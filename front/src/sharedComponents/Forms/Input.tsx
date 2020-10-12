import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

import { TInputProps } from './formTypes';
import TextError from './TextError';

const Input: FC<TInputProps> = ({ label, name, requiredText, ...rest }) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>
        {label} {requiredText && <span>(required)</span>}
      </label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name!} component={TextError} />
    </div>
  );
};

export default Input;
