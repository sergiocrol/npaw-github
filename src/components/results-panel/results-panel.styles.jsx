import styled from 'styled-components';

export const ResultsPanelContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 600px;
  background-color: ${({ theme: { background } }) => background.secondary}
`;