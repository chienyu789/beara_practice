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
  @media (max-width:375px){
    width:180px;
  }
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
  @media (max-width:375px){
    width:100%;
    margin-left:0px;
  }
`;

export const span1 = keyframes`
0% {top: 0px;}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 12px; left:8px; transform: rotate(-135deg);}
`;

export const span11 = keyframes`
0% {top: 12px; left:8px; transform: rotate(-135deg);}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 0px;}
`;

export const span2 = keyframes`
0% {top: 12px;}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 12px; left:8px; transform: rotate(-45deg);}
`;

export const span22 = keyframes`
0% {top: 12px; left:8px; transform: rotate(-45deg);}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 12px;}
`;

export const span3 = keyframes`
0% {top: 24px;}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 12px; left:8px; transform: rotate(-45deg);}
`;

export const span33 = keyframes`
0% {top: 12px; left:8px; transform: rotate(-45deg);}
50% {top: 12px;transform: rotate(0deg)}
100% {top: 24px;}
`;

export const HeaderIcon = styled.div`
  display: none;
  color: white;
  height: 70px;
  width: 40px;
  position: relative;
  margin: 18px 5px;
  span{
    display: inline-block;
    position: absolute;
    height: 3.5px;
    width: 90%;
    background: white;
    border-radius: 5px;
    opacity: 1;
    left:0;
  }
  ${(props) => {
    if (props.toggle) {
      return css`
            span:nth-child(1) {
              animation:${span1} .5s ease-in-out;
              animation-fill-mode: forwards;
            }
            
            span:nth-child(2) {
              animation:${span2} .5s ease-in-out;
              animation-fill-mode: forwards;
            }
            
            span:nth-child(3) {
              animation:${span3} .5s ease-in-out;
              animation-fill-mode: forwards;
          }
          `;
    }
    if (props.toggle === false) {
      return css`
      span:nth-child(1) {
        animation:${span11} .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      
      span:nth-child(2) {
        animation:${span22} .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      
      span:nth-child(3) {
        animation:${span33} .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      `;
    }
    return css`
          span:nth-child(1) {
            top: 0px;
          }
          
          span:nth-child(2) {
            top: 12px;
          }
          
          span:nth-child(3) {
            top: 24px;
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
