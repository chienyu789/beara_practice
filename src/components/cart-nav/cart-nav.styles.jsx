import styled from 'styled-components';

export const CartNavBar = styled.div`
  height: 100%; 
  width: 360px; 
  position: fixed; 
  z-index: 5; 
  top: 0; 
  right: 0;
  background-color:rgb(225, 230, 233); 
  overflow-x: hidden; 
  padding-top: 20px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:768px){
    width: 100%; 
  }
`;

export const Close = styled.div`
  width:10%;
  font-size: 15px;
  margin-left: 300px;
`;

export const Cartitems = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

export const Dicsount = styled.div`
  height: 80px;
  display: inline-flex;
  align-items: center;
`;

export const Checkout = styled.button`
  color:white;
  border: none;
  font-size: 15px;
  background-color: black;
  width:280px;
  height:40px;
  box-sizing: content-box;
  cursor: pointer;
`;
