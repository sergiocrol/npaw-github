import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const DarkModeButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #d7d7d72e;
  color: white;
  overflow: hidden;
  position: relative;

  img {
    transition: all .4s ease-in-out;
    position: absolute;
    left: -1px;
    bottom: ${({ theme }) => theme === true ? 0 : '-52px'};
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: #272B34;
  display: flex;
  justify-content: center;
  padding: 0 60px;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const HeaderBody = styled.div`
  width: 90%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderName = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 2rem;
  }

  > span {
    color: #c1bebe;

    span {
      color: #3864a0;
    }
  }

  svg {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    fill: #c1bebe;
    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }
`;