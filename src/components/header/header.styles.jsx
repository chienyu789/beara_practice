import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color:rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  z-index: 3;
`;

export const Nav = styled.div`
  height: 70px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Languageselect = styled.div`
  width: 15%;
  display: flex;
  padding-left: 10px;
  color: white;
  font-size: 20px;
  align-items: center;
  white-space:nowrap;
  button{
        font-size: 18px;
        color: white;
        background: none;
        border: none;
    }
  @media (max-width:768px){
    display:none;
  }
`;

export const NavList = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:768px){
      display:none;
  }
`;

export const NavLogo = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  margin:auto;
  justify-content: center;
`;

export const Options = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  white-space:nowrap;
`;

export const LogoIcon = styled(Link)`
  width:100%;
  height:50px;
  margin-left:20px;
  path{
    fill:white;
  }
`;

export const span1 = keyframes`
from {top: 0px;}
to {top: 200px;}
`;

export const styles1 = css`
  ${span1} 5s ease-in-out;
`;

export const Line1 = styled.div`
  display: inline-block;
  position: relative;
  height: 3.5px;
  width: 50%;
  background: white;
  border-radius: 5px;
  opacity: 1;

      animation: ${styles1};

`;

export const HeaderIcon = styled.div`
  display: none;
  color: white;
  height: 70px;
  width: 70px;
  transition: .5s ease-in-out;
  position: relative;
  margin: 18px 5px;
  span{
    display: inline-block;
    position: absolute;
    height: 3.5px;
    width: 50%;
    background: white;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    top:24px
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  ${(props) => {
    if (props.toggle) {
      return `
            span:nth-child(1) {
                transform: rotate(-135deg);
                top: 12px;
                left: 8px;
            }
            
            span:nth-child(2) {
                transform: rotate(-45deg);
                top: 12px;
                left: 8px;
            }
            
            span:nth-child(3) {
                transform: rotate(-45deg);
                top: 12px;
                left: 8px;

          }
          `;
    }
    return `
          span:nth-child(1) {
            top: 0px;
            transform-origin: left center;
          }
          
          span:nth-child(2) {
            top: 12px;
            transform-origin: left center;
          }
          
          span:nth-child(3) {
            top: 24px;
            transform-origin: left center;
          }
          `;
  }}

  

  @media (max-width:768px){
      display:inline-block;
  }
`;

export const Dropdown = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Cart = styled.div`
  position: absolute;
  top: 18.5%;
  right: 1%;
  z-index: 4;
  align-items:center;
  justify-content: center;
  height:70px;
`;

export const Overlay = styled.div`
  display: none;
  top:70px;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  transition: all 0.5s ease 0s;
  @media (max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLanguage = styled.div`
  color: white;
  font-size: 20px;
  align-items: center;
  white-space:nowrap;
  button{
    font-size: 18px;
    color: white;
    background: none;
    border: none;
  }
`;

export const Submenu = styled.div`
  margin-left: 15px;
`;