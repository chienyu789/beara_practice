import styled from 'styled-components';

export const Menu = styled.div`
  width: 30%;
  height:85%;
  display: flex;
  justify-content: center;
  padding: 50px 50px;
  position: relative;
  @media (max-width:768px){
    width: 90%;
    height:100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 50px 0px;
  }
`;