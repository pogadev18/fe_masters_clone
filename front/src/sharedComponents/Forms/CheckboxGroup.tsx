import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

import { TMultipeOptions } from './formTypes';
import TextError from './TextError';

type TRenderCheckboxProps = {
  field: {
    name: string;
    value: string[];
  };
};

const CheckboxGroup: FC<TMultipeOptions> = ({
  label,
  name,
  requiredText,
  options,
  ...rest
}) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>
        {label} {requiredText && <span>(*)</span>}
      </label>
      <Field name={name} {...rest}>
        {(props: TRenderCheckboxProps) => {
          const { field } = props;
          return options?.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value?.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name!} component={TextError} />
    </div>
  );
};

export default CheckboxGroup;
