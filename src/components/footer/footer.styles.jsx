import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #272B34;
  display: flex;
  justify-content: center;
  align-items: center;
  color: darkgrey;
  position: fixed;
  bottom: 0;

  > span {
    a {
      font-weight: bold;
      color: #3864a0;
    }
  }
`;