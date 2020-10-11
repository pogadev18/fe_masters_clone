import React, { FC } from 'react';

const FormikControl: FC = ({ control: any }) => {
  switch (control) {
    case 'input':
    case 'textarea':
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
