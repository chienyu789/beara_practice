import styled from 'styled-components';

export const TextBox = styled.div`
  width: 70%;
  height: 80%;
  border: 3px solid black;
  position: absolute;
  top:-1%;
  pointer-events: none;
  @media (max-width:768px){
    width: 80%;
    height:85%;
    border: 3px solid black;
    position: absolute;
    top:-1%;
    pointer-events: none;
  }
`;