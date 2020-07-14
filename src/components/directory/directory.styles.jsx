import styled from 'styled-components';

export const Category = styled.div`
  width: 100%;
  height:560px;
  display: flex;
  justify-content: space-between;
  @media (max-width:768px){
    width: 100%;
    height:1400px;
    display: flex;
    flex-direction:column;
    align-items:center;
    position: relative;
  }
`;
