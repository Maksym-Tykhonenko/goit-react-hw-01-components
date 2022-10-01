import styled from '@emotion/styled';

export const Profail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 
    `;

export const ProfailDescription = styled.div`
    background: #f6f3f3;  
         border: 1px solid skyblue;
  border-radius: 5px;
`;

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
`;

export const Name = styled.p`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
`;
export const Tag = styled.p`
    text-align: center;
    font-size: 25px;
    color: gray;
`;
export const Location = styled.p`
    text-align: center;
    font-size: 25px;
    color: gray;
`;

export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 300px;
    background-color: skyblue;
    margin-top: 0;
    padding-top: 20px;
    padding-left: 0;
    padding-bottom: 20px;
    border: 0px solid skyblue;
    border-radius: 5px;
    
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    font-size: 25px;
`;

export const Quantity = styled.span`
    font-size: 25px;
    font-weight: bold;
`;