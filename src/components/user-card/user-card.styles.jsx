import styled from 'styled-components';

export const UserCardContainer = styled.div`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme: { background } }) => background.terciary};
  margin: 10px auto;
  border-bottom: 1px solid ${({ theme: { card } }) => card.border};
  display: flex;
`;

export const UserImage = styled.img`
  background-image: url(${({ avatar }) => avatar});
  height: 80px;
  width: 80px;
  background-size: cover;
  background-position:50% 50%;
  background-repeat:no-repeat; 
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px;
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding-top: 15px;
  width: calc(100% - 130px);

  span:nth-child(1) {
    font-weight: bold;
    color: #AF5C69;
    margin-bottom: 10px;
  }

  span:nth-child(2) {
    color: ${({ theme: { card } }) => card.text};
  }
`;

export const UserFollowers = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { card } }) => card.followers};
  padding-right: 5px;
  font-weight: bold;

  span {
    font-size: .5rem;
    font-weight: lighter;
  }
`;