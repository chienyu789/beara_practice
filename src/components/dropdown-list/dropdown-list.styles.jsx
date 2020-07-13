import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  width:100%;
  top:100%;
  background-color:rgba(0,0,0,0.5);
  padding:20px 0px 20px 0px;
`;

export const NavLink = styled(Link)`
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 20px;
  white-space:nowrap;
`;
