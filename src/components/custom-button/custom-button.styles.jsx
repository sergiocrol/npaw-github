import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: ${({ disabled, theme: { button } }) => disabled
    ? button.disabled
    : button.normal};
  color: ${({ theme: { button } }) => button.focused};
  border: none;

  &:hover {
    background-color: ${({ disabled, theme: { button } }) => disabled
    ? button.disabled
    : button.focused};
    color: ${({ disabled, theme: { button } }) => disabled ? null : button.normal};
    border: ${({ disabled }) => disabled ? null : '1px solid black'};
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid white;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  width: ${({ width }) => width ? width : 165}px;
  height: ${({ height }) => height ? height : 42}px;
  letter-spacing: 0.5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
