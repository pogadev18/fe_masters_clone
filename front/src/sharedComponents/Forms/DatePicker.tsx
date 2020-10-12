import React, { FC } from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';

import { TInputProps } from './formTypes';
import TextError from './TextError';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: FC<TInputProps> = ({
  name,
  label,
  requiredText,
  ...rest
}) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>
        {label} {requiredText && <span>(*)</span>}
      </label>
      <Field name={name}>
        {(props: any) => {
          const { form, field } = props;
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: any) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name!} component={TextError} />
    </div>
  );
};

export default DatePicker;
