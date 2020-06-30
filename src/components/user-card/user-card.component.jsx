import React from 'react';

import { UserCardContainer, UserImage, UserName, UserFollowers } from './user-card.styles';

const UserCard = ({ user: { login, id, avatar_url, followers } }) => {
  return (
    <UserCardContainer>
      <UserImage avatar={avatar_url} />
      <UserName>
        <span>{login}</span>
        <span>#{id}</span>
      </UserName>
      <UserFollowers>{followers}<span>followers</span></UserFollowers>
    </UserCardContainer>
  );
}

export default UserCard;