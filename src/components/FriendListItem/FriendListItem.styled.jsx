import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  width: 250px;
  text-align: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid skyblue;
  border-radius: 10px;
`;
export const Statys = styled.span`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
  margin-right: 5px;
`;
export const Avatar = styled.img`
 margin-right: 10px;
`;
export const Name = styled.p`
 font-size: 25px;
 font-weight: bold;
`;