import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

import { TInputProps } from './formTypes';
import TextError from './TextError';

const TextArea: FC<TInputProps> = ({ label, name, requiredText, ...rest }) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>
        {label} {requiredText && <span>(*)</span>}
      </label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={name!} component={TextError} />
    </div>
  );
};

export default TextArea;
