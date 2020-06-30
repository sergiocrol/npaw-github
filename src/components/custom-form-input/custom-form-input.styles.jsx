import styled, { css } from 'styled-components';

const shrinkLabel = css`
  ${({ value }) => value && value.length
    ? `
  top: 5px;
  font-size: 12px;
  color: ${({ theme: { input } }) => input.text};
  `
    : null}
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 36px;
  transition: 300ms ease all;
  ${shrinkLabel}
`;

export const FormInput = styled.input`
  background: none;
  background-color: ${({ theme: { input } }) => input.background};
  color: ${({ theme: { input } }) => input.text};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: ${({ width }) => width ? width : 600}px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme: { input } }) => input.border};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .${Label} {
    ${shrinkLabel} 
  }
`;