import React, { FC } from 'react';

import { TFormikControlProps } from './formTypes';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const FormikControl: FC<TFormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
