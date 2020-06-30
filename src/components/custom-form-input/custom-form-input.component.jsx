import React from 'react';

import { FormInputContainer, FormInput, Label } from './custom-form-input.styles';

const CustomFormInput = ({ handleInput, label, value, errorMessage, ...otherProps }) => {
  return (
    <FormInputContainer>
      <FormInput className='form-input' onChange={handleInput} {...otherProps} />
      {
        label ?
          (<Label value={value}>
            {label}
          </Label>)
          : null
      }
      <span>{errorMessage}</span>
    </FormInputContainer>);
};

export default CustomFormInput;