import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

import { TSelectProps } from './formTypes';
import TextError from './TextError';

const Select: FC<TSelectProps> = ({
  label,
  name,
  requiredText,
  options,
  ...rest
}) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>
        {label} {requiredText && <span>(required)</span>}
      </label>
      <Field as='select' id={name} name={name} {...rest}>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name!} component={TextError} />
    </div>
  );
};

export default Select;
