import styled from 'styled-components';

export const UserPageContainer = styled.div`
  width: 100%;
  max-width: 980px;
  height: calc(100vh - 140px);
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

export const UserCard = styled.div`
  width: 90%;
  height: 480px;
  max-width: 600px;
  border-radius: 20px;
  background-color: ${({ theme: { background } }) => background.secondary};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:nth-child(3) {
    margin-top: 60px;
  }
`;

export const UserImage = styled.img`
  background-image: url(${({ avatar }) => avatar});
  height: 120px;
  width: 120px;
  background-size: cover;
  background-position:50% 50%;
  background-repeat:no-repeat; 
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px;
  top: -65px;
  left: calc(50% - 65px);
`;

export const UserName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 80px;

  span:nth-child(1) {
    font-weight: bold;
    font-size: 1.3rem;
    color: #3864a0;
  }

  span:nth-child(2) {
    color: darkgrey;
  }
`;

export const Field = styled.div`
  width: 68%;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding-right: 60px;
  align-self: flex-end;
  @media (max-width: 600px) {
    width: 80%;
    padding-right: 0;
  }

  svg {
    width: 40px;
    height: 40px;
    stroke: #af5c69;
    margin-right: 20px;
  }

  span {
    font-weight: bold;
    font-size: 1.1rem;
    color: darkgrey;
    @media (max-width: 600px) {
      font-size: .9rem;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -21px;
`;