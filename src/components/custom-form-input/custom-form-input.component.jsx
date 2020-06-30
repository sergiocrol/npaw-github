import React from 'react';

import { FormInputContainer, FormInput, Label } from './custom-form-input.styles';

const CustomFormInput = ({ handleInput, label, value, ...otherProps }) => {
  console.log(value)
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
    </FormInputContainer>);
};

export default CustomFormInput;