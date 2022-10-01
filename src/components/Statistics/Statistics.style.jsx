import styled from '@emotion/styled';

export const StatBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;
  border: 1px solid skyblue;
  border-radius: 3px;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #${getRandomHexColor};
`;
export const StatItemLable = styled.span`
   text-align: center;
`;
export const StatItemPercentage = styled.span`
   text-align: center;
`;


function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}