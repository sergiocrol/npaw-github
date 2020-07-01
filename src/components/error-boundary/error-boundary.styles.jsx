import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    margin-bottom: 30px;
  }

  span {
    color: darkgrey;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;