import styled from 'styled-components';

export const WelcomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const WelcomeElement = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: darkgrey;
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  span {
    width: 70%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 3rem;
    margin: 0 15px 0 30px;
    color: white;

    @media (max-width: 600px) {
      width: 50px;
      height: 50px;
      font-size: 2rem;
      margin: 0 15px;
    }
  }
`;

export const One = styled.div`
  background-color: #3ea09b;
`;

export const Two = styled.div`
  background-color: #af5c69;
`;

export const Three = styled.div`
  background-color: #3864a0;
`;